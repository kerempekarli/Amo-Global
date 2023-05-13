import Homepage from "./pages/homepage.js";
import AboutPage from "./pages/aboutpage.js";
import Services from "./pages/services";
import "./index.css";
import AirTransportation from "./pages/airTransportation";
import SeaTransportation from "./pages/seaTransportation";
import LandTransportation from "./pages/landTransportation";
import { Routes, Route, Link, Navlink } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/contact" element={<Services></Services>}></Route>
      <Route
        path="/sea-transport"
        element={<SeaTransportation></SeaTransportation>}
      ></Route>
      <Route
        path="/air-transport"
        element={<AirTransportation></AirTransportation>}
      ></Route>
      <Route
        path="/land-transport"
        element={<LandTransportation></LandTransportation>}
      ></Route>
    </Routes>
  );
}

export default App;
