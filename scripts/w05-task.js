/* W05: Programming Tasks */
/*
Declare Global Variables
Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
Declare a global empty array variable to store a list of temples named templeList.
*/


/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templeList = [];
let data = null;
//let templesArray = [];

/* async displayTemples Function */


function displayTemples(templeList) {
  templeList.forEach((element) => {
    const newH3 = document.createElement("h3");
    newH3.innerText = element.templeName;
    //const newH41 = document.createElement("h4");
   // newH41.innerText = element.location;
    //const newH42 = document.createElement("h4");
    //newH42.innerText = element.dedicated;
    const addImage = document.createElement("img");
    addImage.setAttribute("src", element.imageUrl);
    addImage.setAttribute("alt", element.templeName);
    //addImage.setAttribute("width", "370px");
    //addImage.setAttribute("height", "230px");

    const newArticle = document.createElement("article");
    newArticle.append(newH3, addImage);
    //newArticle.append(newH3, newH41, newH42, addImage);
    document.getElementById("temples").appendChild(newArticle);
    templesElement.appendChild(newArticle);
  });
}
        


/* async getTemples Function using fetch()*/
async function getTemples() {
  const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
  const response = await fetch(url);
  if (response.ok) {
    data = await response.json();
    templeList = data;
    displayTemples(templeList);
    console.log(templeList);
  }
}

/* reset Function */
function reset() {
  document.getElementById("temples").innerHTML = "";
  }

/* filterTemples Function */
//Function: filterTemples()
//	This criterion is linked to a Learning Outcome Function: sortBy()
//A function expression named "sortBy" uses a switch statement to filter the temple data according to the selection.
//There is a place where says to use function filterTemples() and another one function sortBy()
function filterTemples(temples) {
  reset();
  let filter = document.getElementById("filtered").value;
  console.log(filter);

  switch (filter) {
    case "utah":
      let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
      displayTemples(utahTemples);
      break;

    case "notutah":
      let notutahTemples = temples.filter(temple => !temple.location.toLowerCase().includes("utah"));
      displayTemples(notutahTemples);
      break;

    case "older":
      //referenceDate = ("1950, January, 1");
      let olderTemples = temples.filter(temple => getAgeAtBuildInYears(temple.dedicated) <= 0);
      displayTemples(olderTemples);
			break;

    case "all":
      //let allTemples = temples.filter(temple => temple.location.toLowerCase().includes(""));
      let allTemples = temples;
      displayTemples(allTemples);
      break;

  } 
  document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList)});
}


function getAgeAtBuildInYears(builtDate) {
	let built = new Date(builtDate);
	let reference = new Date("1950, January, 1");
	if (reference === null) {
		death = new Date();
	}
	return Math.floor((built - reference) / (365 * 24 * 60 * 60 * 1000));
}



getTemples();
filterTemples(templesElement);

/* Event Listener */
