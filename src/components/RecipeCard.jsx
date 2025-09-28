import "./RecipeCard.css";

/**
 * RecipeCard component displays a preview of a recipe in card format.
 * Shows recipe image, title, description, and key metadata.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.recipe - Recipe object containing all recipe data
 * @param {Function} props.onClick - Callback function when card is clicked
 * @returns {JSX.Element} Interactive recipe card
 */
const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-difficulty">{recipe.difficulty}</div>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-meta">
          <span className="recipe-time">
            <svg viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
            </svg>
            {recipe.cookTime}
          </span>

          <span className="recipe-servings">
            <svg viewBox="0 0 24 24">
              <path d="M12,2A2,2 0 0,1 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4A2,2 0 0,1 12,2M21,9V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V9L6.5,7L10,9H14L17.5,7L21,9Z" />
            </svg>
            {recipe.servings} servings
          </span>

          <span className="recipe-cuisine">{recipe.cuisine}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
