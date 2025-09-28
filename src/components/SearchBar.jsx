import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

/**
 * SearchBar component provides search and filter functionality for recipes.
 * Features debounced search input and dropdown filters for cuisine and difficulty.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Callback function for search term changes
 * @param {Function} props.onFilterChange - Callback function for filter changes
 * @returns {JSX.Element} Search bar with input field and filter dropdowns
 */
const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const debounceTimerRef = useRef(null);

  // Available filter options
  const cuisines = ["Italian", "Indian", "American", "Mexican", "Asian"];
  const difficulties = ["Easy", "Medium", "Hard"];

  /**
   * Debounced search effect to optimize performance.
   * Delays search execution by 500ms to prevent excessive function calls.
   */
  useEffect(() => {
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    // Cleanup function to clear timer on unmount
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchTerm, onSearch]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Don't call onSearch immediately - let the useEffect handle it with debouncing
  };

  const handleCuisineChange = (e) => {
    const value = e.target.value;
    setSelectedCuisine(value);
    onFilterChange({ cuisine: value, difficulty: selectedDifficulty });
  };

  const handleDifficultyChange = (e) => {
    const value = e.target.value;
    setSelectedDifficulty(value);
    onFilterChange({ cuisine: selectedCuisine, difficulty: value });
  };

  const clearFilters = () => {
    // Clear the debounce timer when clearing filters
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    setSearchTerm("");
    setSelectedCuisine("");
    setSelectedDifficulty("");
    onSearch(""); // Call immediately for clear action
    onFilterChange({ cuisine: "", difficulty: "" });
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search recipes by name or ingredient..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <svg className="search-icon" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>

      <div className="filters">
        <select
          value={selectedCuisine}
          onChange={handleCuisineChange}
          className="filter-select"
        >
          <option value="">All Cuisines</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={handleDifficultyChange}
          className="filter-select"
        >
          <option value="">All Difficulties</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>

        {(searchTerm || selectedCuisine || selectedDifficulty) && (
          <button onClick={clearFilters} className="clear-filters">
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
