"use strict";

let earth={};


let earthData={

    "name": "Earth",
    "disc": "4 Billion",
    "mass": "5.572x10^24 kg",
    "size": "3959 mi",
    "distFromSun": "92.06 million mi",
    "atmosphere": "nitrogen and oxygen",
    "satellites": "Earth's moon",
    "orbiters": "The International Space Station"

};

let earthInfo= `<div> 
        <h2> The planet ${earthData.name}</h2>
        <span>${earthData.name} was discovered in ${earthData.disc} years ago.</span><br>
        <span>It has a mass of ${earthData.mass} and its size is ${earthData.size}</span><br>
        <span>Its distance from the sun is ${earthData.distFromSun} and has an atmosphere made up of ${earthData.atmosphere}</span><br>
        <span>it has ${earthData.satellites} satellites</span>
        <span>It currently has or has had ${earthData.orbiters} orbiting around it</span>
        </div>`;

let outputTo= function(output){
    output.append(earthInfo);
};


module.exports= {outputTo};
