import React from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import Catalogue from "./Catalogue";
import OurBrand from "./OurBrand";
import OurMission from "./OurMission";
import './App.css'


function App() {
return <Router>
<nav>
    <Link to="/catalogue" className="link">Catalogue</Link>
    <Link to="/ourbrand" className="link">Our Brand</Link>
    <Link to="/ourmission" className="link">Our Mission</Link>
</nav>
    <Routes>
    <Route path="/" element={<Catalogue/>}/>
    <Route path="/ourbrand" element={<OurBrand/>}/>
    <Route path="/ourmission" element={<OurMission/>}/>
</Routes>
</Router>


}
export default App;