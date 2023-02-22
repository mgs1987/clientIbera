import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import CreateHotel from "./Components/Create/CreateHotel";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import Reserve from "./Components/Reserve/Reserve";
import HotelDetails from "../src/Components/HotelDetails/HotelDetails.js";
import DeleteUser from "./Components/DeleteUser/DeleteUser";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createHotel" element={<CreateHotel />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/reserve" element={<Reserve />} />
          <Route exact path="/hotels/:id" element={<HotelDetails />} />
          {/* <Route exact path="/activities" element={<Reservations/>}/> */}
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
          <Route exact path="/delete" element={<DeleteUser />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

//
