"use strict";

let venusData={
    "name": "Venus",
    "disc": "1761",
    "mass": "4.867 × 10^24 kg",
    "size": "3,760 mi",
    "distFromSun": "67.24 million mi",
    "atmosphere": "Carbon Dioxide,Nitrogen",
    "satellites": "None",
    "orbiters": "Venera 11, Venera 12"
};



let venusInfo= `<div> 
        <h2> The planet ${venusData.name}</h2>
        <span>${venusData.name} was discovered in ${venusData.disc} years ago.</span><br>
        <span>It has a mass of ${venusData.mass} and its size is ${venusData.size}</span><br>
        <span>Its distance from the sun is ${venusData.distFromSun} and has an atmosphere made up of ${venusData.atmosphere}</span><br>
        <span>it has ${venusData.satellites} satellites</span>
        <span>It currently has or has had ${venusData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(venusInfo);
};


module.exports= {outputTo};
