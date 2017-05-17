"use strict";


let satData={
    "name": "Saturn",
    "disc": "1610",
    "mass": "5.683 × 10^26 kg",
    "size": "36,184 mi",
    "distFromSun": "888.2 million mi",
    "atmosphere-composition": "hydrogen, helium",
    "satellites": "62",
    "orbiters": "Cassini-Huygens"
};




let satInfo= `<div> 
        <h2> The planet ${satData.name}</h2>
        <span>${satData.name} was discovered in ${satData.disc} years ago.</span><br>
        <span>It has a mass of ${satData.mass} and its size is ${satData.size}</span><br>
        <span>Its distance from the sun is ${satData.distFromSun} and has an atmosphere made up of ${satData.atmosphere}</span><br>
        <span>it has ${satData.satellites} satellites</span>
        <span>It currently has or has had ${satData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(satInfo);
};


module.exports= {outputTo};
