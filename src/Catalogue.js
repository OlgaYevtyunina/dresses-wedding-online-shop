import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons"
import Dresses from "./Dresses"


function Home(){


const [dresses, setDresses] = useState(data);

const chosenDresses = (searchTerm) => {
const newDresses = data.filter(element => element.searchTerm === searchTerm);
setDresses(newDresses);
}
return(<div>
    <div className="cont">
    <h2 className="back">Oscar De La Vesna Wedding Dresses</h2>
    </div>
    <div className="cont">
    <h5>Call Us: +7495-555-67-90</h5>
    </div>
    <Buttons filteredDresses={chosenDresses}/>
    <Dresses shopDresses={dresses}/>
    </div>
)
}

export default Home;