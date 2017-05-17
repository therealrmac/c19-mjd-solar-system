(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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




},{}],3:[function(require,module,exports){
"use strict";
console.log('main has loaded');
let output= $("#output");
let Earth= $("#earth");

let earthOut= require("./earth");
let mercOut= require("./merc");
let venusOut= require("./venus");
let marsOut= require("./mars");
let jupiterOut= require("./jupiter");
let saturnOut= require("./saturn");
let neptuneOut= require("./neptune");
let uranusOut= require("./uranus");

mercOut.outputTo(output);
venusOut.outputTo(output);
earthOut.outputTo(output);
marsOut.outputTo(output);
saturnOut.outputTo(output);
jupiterOut.outputTo(output);
uranusOut.outputTo(output);
earthOut.outputTo(output);





},{"./earth":1,"./jupiter":2,"./mars":4,"./merc":5,"./neptune":6,"./saturn":7,"./uranus":8,"./venus":9}],4:[function(require,module,exports){
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


},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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



},{}],9:[function(require,module,exports){
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

},{}]},{},[3]);
