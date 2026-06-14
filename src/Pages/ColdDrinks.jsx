import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import foodData from "../data/foodData";

function ColdDrinks() {
  return (
    <>
      <Navbar />

      <h1 style={{textAlign:"center"}}>
        Cold Drinks
      </h1>

      <div className="grid">
        {foodData.drinks.map(item => (
          <FoodCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default ColdDrinks;