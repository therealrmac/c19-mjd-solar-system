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




