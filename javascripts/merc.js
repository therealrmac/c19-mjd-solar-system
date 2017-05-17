"use strict";

let mercData={
    "name": "Mercury",
    "disc": "1659",
    "mass": "3.285 × 10^23 kg",
    "size": "1516 Miles",
    "distFromSun": "35.98 million mi",
    "atmosphere": ["Hydrogen", "Helium", "Oxygen"],
    "satellites": "None",
    "orbiters": "Mariner 10, Mesenger"
};


let mercInfo= `<div> 
        <h2> The planet ${mercData.name}</h2>
        <span>${mercData.name} was discovered in ${mercData.disc} years ago.</span><br>
        <span>It has a mass of ${mercData.mass} and its size is ${mercData.size}</span><br>
        <span>Its distance from the sun is ${mercData.distFromSun} and has an atmosphere made up of ${mercData.atmosphere}</span><br>
        <span>it has ${mercData.satellites} satellites</span>
        <span>It currently has or has had ${mercData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(mercInfo);
};


module.exports= {outputTo};
