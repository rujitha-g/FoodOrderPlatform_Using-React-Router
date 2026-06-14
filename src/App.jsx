import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Home from "./pages/Home";
import Burgers from "./pages/Burgers";
import Fries from "./pages/Fries";
import ColdDrinks from "./pages/ColdDrinks";
import "./styles/FoodPage.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/burgers"
          element={<Burgers />}
        />

        <Route
          path="/fries"
          element={<Fries />}
        />

        <Route
          path="/drinks"
          element={<ColdDrinks />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
