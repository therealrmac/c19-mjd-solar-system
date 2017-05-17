"use strict";

let jupiterData={
    "name": "Juipter",
    "disc": "1610",
    "mass": "1.898 × 10^27 kg",
    "size": "43,441 mi",
    "distFromSun": "483.8 million mi",
    "atmosphere-composition": "Hydrogen, Helium",
    "satellites": "67",
    "orbiters": "Juno"  
};

let jupiterInfo= `<div> 
        <h2> The planet ${jupiterData.name}</h2>
        <span>${jupiterData.name} was discovered in ${jupiterData.disc} years ago.</span><br>
        <span>It has a mass of ${jupiterData.mass} and its size is ${jupiterData.size}</span><br>
        <span>Its distance from the sun is ${jupiterData.distFromSun} and has an atmosphere made up of ${jupiterData.atmosphere}</span><br>
        <span>it has ${jupiterData.satellites} satellites</span>
        <span>It currently has or has had ${jupiterData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(jupiterInfo);
};


module.exports= {outputTo};



