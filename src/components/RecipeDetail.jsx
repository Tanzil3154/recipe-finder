import "./RecipeDetail.css";

/**
 * RecipeDetail component displays full recipe information in a modal overlay.
 * Shows complete recipe details including ingredients and step-by-step instructions.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.recipe - Complete recipe object with all details
 * @param {Function} props.onClose - Callback function to close the modal
 * @returns {JSX.Element|null} Full-screen recipe detail modal or null if no recipe
 */
const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-detail-overlay" onClick={onClose}>
      <div className="recipe-detail" onClick={(e) => e.stopPropagation()}>
        <div className="recipe-detail-header">
          <button className="close-button" onClick={onClose}>
            <svg viewBox="0 0 24 24">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>

        <div className="recipe-detail-content">
          <div className="recipe-detail-image">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-badges">
              <span className="difficulty-badge">{recipe.difficulty}</span>
              <span className="cuisine-badge">{recipe.cuisine}</span>
            </div>
          </div>

          <div className="recipe-info">
            <h1 className="recipe-detail-title">{recipe.title}</h1>
            <p className="recipe-detail-description">{recipe.description}</p>

            <div className="recipe-stats">
              <div className="stat">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                </svg>
                <span>{recipe.cookTime}</span>
              </div>
              <div className="stat">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4A2,2 0 0,1 12,2M21,9V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V9L6.5,7L10,9H14L17.5,7L21,9Z" />
                </svg>
                <span>{recipe.servings} servings</span>
              </div>
            </div>

            <div className="recipe-sections">
              <div className="ingredients-section">
                <h2>Ingredients</h2>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      <span className="ingredient-bullet">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="instructions-section">
                <h2>Instructions</h2>
                <ol className="instructions-list">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item">
                      <span className="instruction-number">{index + 1}</span>
                      <span className="instruction-text">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
