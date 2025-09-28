import { useMemo, useState } from "react";
import "./App.css";
import RecipeDetail from "./components/RecipeDetail";
import RecipeGrid from "./components/RecipeGrid";
import SearchBar from "./components/SearchBar";
import { recipes } from "./data/recipes";

/**
 * Main application component that manages the recipe finder functionality.
 * Handles search, filtering, and recipe selection state.
 *
 * @component
 * @returns {JSX.Element} The main application interface
 */
function App() {
  // State for managing search and filter functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ cuisine: "", difficulty: "" });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  /**
   * Memoized filtered recipes based on search term and filters.
   * Optimizes performance by only recalculating when dependencies change.
   */
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        searchTerm === "" ||
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCuisine =
        filters.cuisine === "" || recipe.cuisine === filters.cuisine;

      const matchesDifficulty =
        filters.difficulty === "" || recipe.difficulty === filters.difficulty;

      return matchesSearch && matchesCuisine && matchesDifficulty;
    });
  }, [searchTerm, filters]);

  /**
   * Handles search term updates from SearchBar component.
   * @param {string} term - The search term to filter recipes
   */
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  /**
   * Handles filter changes from SearchBar component.
   * @param {Object} newFilters - Object containing cuisine and difficulty filters
   * @param {string} newFilters.cuisine - Selected cuisine filter
   * @param {string} newFilters.difficulty - Selected difficulty filter
   */
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  /**
   * Handles recipe selection to show detailed view.
   * @param {Object} recipe - The selected recipe object
   */
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  /**
   * Closes the recipe detail modal.
   */
  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">
            <span className="title-icon">🍳</span>
            Recipe Finder
          </h1>
          <p className="app-subtitle">
            Discover delicious recipes from around the world
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
          />

          <div className="results-header">
            <h2>
              {filteredRecipes.length === recipes.length
                ? `All Recipes (${recipes.length})`
                : `Found ${filteredRecipes.length} recipe${
                    filteredRecipes.length !== 1 ? "s" : ""
                  }`}
            </h2>
          </div>

          <RecipeGrid
            recipes={filteredRecipes}
            onRecipeClick={handleRecipeClick}
          />
        </div>
      </main>

      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default App;
