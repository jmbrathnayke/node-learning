const radius = 30;
const PI = Math.PI;
const area = PI * radius * radius;

const diameter = 2 * radius;
const circumference = 2 * PI * radius;
console.log("area: " + area);
console.log("diameter: " + diameter.toFixed(3));
console.log("circumference: " + circumference.toPrecision(4));