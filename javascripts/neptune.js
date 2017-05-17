"use strict";

let nepData={
    "name": "Neptune",
    "disc": "1846",
    "mass": "1.024 × 10^26 kg",
    "size": "15,299 mi",
    "distFromSun": "2.795 billion mi",
    "atmosphere": "Hydrogen, Helium, Methane",
    "satellites": "14",
    "orbiters": "Voyager 2"
};






let nepInfo= `<div> 
        <h2> The planet ${nepData.name}</h2>
        <span>${nepData.name} was discovered in ${nepData.disc} years ago.</span><br>
        <span>It has a mass of ${nepData.mass} and its size is ${nepData.size}</span><br>
        <span>Its distance from the sun is ${nepData.distFromSun} and has an atmosphere made up of ${nepData.atmosphere}</span><br>
        <span>it has ${nepData.satellites} satellites</span>
        <span>It currently has or has had ${nepData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(nepInfo);
};


module.exports= {outputTo};
