"use strict";

let uranusData={
    "name": "Uranus",
    "disc": "1781",
    "mass": "8.681 × 10^25 kg",
    "size": "15,759 mi",
    "distFromSun": "1.784 billion mi",
    "atmosphere": "Hydrogen, Helium, Methane",
    "satellites": "27",
    "orbiters": "Voyager 2"
};



let uranusInfo= `<div> 
        <h2> The planet ${uranusData.name}</h2>
        <span>${uranusData.name} was discovered in ${uranusData.disc} years ago.</span><br>
        <span>It has a mass of ${uranusData.mass} and its size is ${uranusData.size}</span><br>
        <span>Its distance from the sun is ${uranusData.distFromSun} and has an atmosphere made up of ${uranusData.atmosphere}</span><br>
        <span>it has ${uranusData.satellites} satellites</span>
        <span>It currently has or has had ${uranusData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(uranusInfo);
};


module.exports= {outputTo};


