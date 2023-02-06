
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Components/Home/Home";
import CreateHotel from "./Components/Create/CreateHotel";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Destinations from './Components/Destinations/Destinations';
import Landing from "./Components/Landing/Landing";
import Reserve from "./Components/Reserve/Reserve"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
              <Route exact path="/" element={<Landing />} />          
              <Route exact path='/createHotel' element={<CreateHotel/>}/>
              <Route exact path="/home" element={<Home/>}/> 
              <Route exact path="/destinations" element={<Destinations/>}/> 
              <Route exact path="/reserve" element={<Reserve/>}/>
           {/* <Route exact path="/activities" element={<Reservations/>}/> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
