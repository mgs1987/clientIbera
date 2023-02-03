
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Components/Home/Home";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Destinations from './Components/Destinations/Destinations';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home/>}/> 
           <Route exact path="/destinations" element={<Destinations/>}/> 
           {/* <Route exact path="/activities" element={<Reservations/>}/> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
