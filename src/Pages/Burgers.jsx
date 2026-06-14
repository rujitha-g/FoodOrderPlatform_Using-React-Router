import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import foodData from "../data/foodData";

function Burgers() {
  return (
    <>
      <Navbar />

      <h1 style={{textAlign:"center"}}>
        Burgers
      </h1>

      <div className="grid">
        {foodData.burgers.map(item => (
          <FoodCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default Burgers;