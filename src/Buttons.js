
function Buttons({filteredDresses}){
    return(
        <div className="cont">
            <button className="change" onClick = {() => filteredDresses("beach")}>Beach WD</button>
            <button className="change" onClick = {() => filteredDresses("princess")}>Princess WD</button>
            <button className="change" onClick = {() => filteredDresses("lux")}>Luxury WD</button>
            <button className="change" onClick = {() => filteredDresses("modern")}>Modern WD</button>
            <button className="change" onClick = {() => filteredDresses("murmaid")}>Murmaid WD</button>
            <button className="change" onClick = {() => filteredDresses("openback")}>Backless WD</button>
        </div>
    )
    }
    
    export default Buttons;