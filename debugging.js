const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area1:", area)
radius = 4;
area = radius * radius * PI;
console.log("Area2:", area)


function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
radius = 3;
area = circleArea(3);
console.log("Area3:", area);
radius = 4;
area = circleArea(4);
console.log("Area4:", area);

let num1 = 100;
let num2 = '10';
let sum = num1 + num2;
console.log("Sum:", sum);
sum = num1 + Number(num2);
console.log("Sum:", sum);