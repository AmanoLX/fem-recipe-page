const Recipe = () => {
  return (
    <div className="recipe-intro">
      <h1 className="recipe-title">Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <article className="preparation">
        <h3 className="preparation-title">Preparation time</h3>
        <ul className="preparation-list">
          <li>
            <span>Total: </span>Approximately 10 minutes
          </li>
          <li>
            <span>Preparation: </span>5 minutes
          </li>
          <li>
            <span>Cooking: </span>5 minutes
          </li>
        </ul>
      </article>
    </div>
  );
};
export default Recipe;
