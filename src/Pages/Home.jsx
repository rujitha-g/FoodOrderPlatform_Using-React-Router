import Navbar from "../components/Navbar";
import DeliveryInfo from "../components/DeliveryInfo";
import CustomerReviews from "../components/CustomerReviews";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">

        <div>
          <h1>McDonald's East London</h1>
          <p>Fresh burgers delivered to your door.</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          alt=""
        />
      </div>

      <DeliveryInfo />

      <CustomerReviews />
    </>
  );
}

export default Home;