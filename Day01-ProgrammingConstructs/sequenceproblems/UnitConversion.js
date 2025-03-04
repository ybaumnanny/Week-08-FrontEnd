const feetToInches = 12;
const feetToMeters = 0.3048;
const squareFeetToAcre = 43560;
// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / feetToInches;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);
// b. Convert rectangular plot dimensions to meters
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log(`Plot dimensions: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);
// c. Calculate the area of 25 such plots in acres
let areaOnePlotSqFeet = lengthFeet * widthFeet;
let totalAreaSqFeet = areaOnePlotSqFeet * 25;
let totalAreaAcres = totalAreaSqFeet / squareFeetToAcre;
console.log(`Total area of 25 plots = ${totalAreaAcres.toFixed(4)} acres`);
