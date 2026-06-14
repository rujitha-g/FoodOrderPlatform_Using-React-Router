import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import foodData from "../data/foodData";

function Fries() {
  return (
    <>
      <Navbar />

      <h1 style={{textAlign:"center"}}>
        Fries
      </h1>

      <div className="grid">
        {foodData.fries.map(item => (
          <FoodCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default Fries;