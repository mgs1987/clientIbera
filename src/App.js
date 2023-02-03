
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateHotel from "./Components/Create/CreateHotel";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/createHotels' element={<CreateHotel />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
