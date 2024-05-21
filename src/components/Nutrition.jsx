const Nutrition = () => {
  return (
    <div className="nutrition">
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tr>
          <td className="nutrient">Calories</td>
          <td className="nutrient-value">277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td className="nutrient-value">0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td className="nutrient-value">20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td className="nutrient-value">22g</td>
        </tr>
      </table>
    </div>
  );
};
export default Nutrition;
