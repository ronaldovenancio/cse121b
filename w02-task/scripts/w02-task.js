/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Ronaldo Venancio da Silva";
let currentYear = new Date().getFullYear();
let profilePicture = "images/myimageronaldovenancio.png";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
const foodElement = document.querySelector("#food");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
document.querySelector("img").setAttribute('width', "240px");
document.querySelector("img").setAttribute('height', "300px");
imageElement.setAttribute("alt", " This is ${fullName}. He is a math teacher at CMR.");



/* Step 5 - Array */

let favfoods = ["Rice", "Tika Massala", "Prioshki", "Pizza", "Ice Cream", "Taco", "Sushi", "Pasta", "Burger", "Steak", "Chicken", "Salad", "Fruit"];
// document.getElementById("food").innerHTML = favfoods;
foodElement.innerHTML = favfoods;
let newfood = "Chocolate";
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.shift();
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.pop();
foodElement.innerHTML += `<br>${favfoods}`;



