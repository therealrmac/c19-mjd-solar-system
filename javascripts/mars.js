"use strict";
let marsData={
    "name": "Mars",
    "disc": "1877",
    "mass": "6.39 × 10^23 kg",
    "size": "2,106 mi",
    "distFromSun": "141.6 million mi",
    "atmosphere-composition": ["Carbon Dioxide", "Nitrogen"],
    "satellites": "2",
    "orbiters": "54"
};

let marsInfo= `<div> 
        <h2> The planet ${marsData.name}</h2>
        <span>${marsData.name} was discovered in ${marsData.disc} years ago.</span><br>
        <span>It has a mass of ${marsData.mass} and its size is ${marsData.size}</span><br>
        <span>Its distance from the sun is ${marsData.distFromSun} and has an atmosphere made up of ${marsData.atmosphere}</span><br>
        <span>it has ${marsData.satellites} satellites</span>
        <span>It currently has or has had ${marsData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(marsInfo);
};


module.exports= {outputTo};

