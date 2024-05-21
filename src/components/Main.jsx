import recipeImg from '../assets/images/image-omelette.jpeg';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Nutrition from './Nutrition';
import Recipe from './Recipe';

const Main = () => {
  return (
    <>
      {/* MAIN CONTAINER */}
      <main className="container">
        {/* IMAGE CONTAINER */}
        <section className="image-container">
          <img src={recipeImg} alt="omelette image" className="recipe-image" />
        </section>
        {/* RECIPE CONTAINER */}
        <section className="recipe-container">
          <Recipe />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </section>
      </main>
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Michel Ribbens</a>.
      </div>
    </>
  );
};
export default Main;
