import RecipeCard from "./RecipeCard";
import "./RecipeGrid.css";

/**
 * RecipeGrid component displays a responsive grid of recipe cards.
 * Shows an empty state when no recipes are available.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.recipes - Array of recipe objects to display
 * @param {Function} props.onRecipeClick - Callback function when a recipe is clicked
 * @returns {JSX.Element} Grid of recipe cards or empty state
 */
const RecipeGrid = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17A1.5,1.5 0 0,1 10.5,15.5A1.5,1.5 0 0,1 12,14A1.5,1.5 0 0,1 13.5,15.5A1.5,1.5 0 0,1 12,17M12,13A1,1 0 0,1 11,12V8A1,1 0 0,1 12,7A1,1 0 0,1 13,8V12A1,1 0 0,1 12,13Z" />
          </svg>
        </div>
        <h3>No recipes found</h3>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
      ))}
    </div>
  );
};

export default RecipeGrid;
