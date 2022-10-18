import React, {useState, useEffect} from "react";

const Home = () => {


	const [color, setColor] = useState();

	const [morado, setMorado] =useState(false);

	var addPurple = () => {
		setMorado(!morado)
	}

	var handleClick = () => {
		var listOfColors= ["red", "orange", "green"];
		var colorIndex = Math.round(Math.random()*2);
     	setColor(listOfColors[colorIndex])
	}


		return (
			<>
			<div className="stick"></div>

			<div className="container d-flex flex-column align-items-center traffic-light">
				
				<div onClick={()=>setColor("red")} className={`red` +((color==="red") ? " lightRed" : "")}></div>
				<div onClick={()=>setColor("orange")} className={`orange`+((color==="orange") ? " lightOrange" : "")}></div>
				<div onClick={()=>setColor("green")} className={`green`+((color=="green") ? " lightGreen" : "")}></div>

				<div className={((morado==true) ? "purple lightPurple" : "")}></div>

			</div>
			<div className="container d-flex flex-column">
				<button onClick={handleClick} className="change"> Random Mode</button>
				<button onClick={addPurple} className="addPurple">Add Purple</button>
			</div>
		
			</>
		);
};

export default Home;

