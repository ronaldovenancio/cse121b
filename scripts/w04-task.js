/* LESSON 4 - Programming Tasks */
let photoElement = document.querySelector("#photo");
/* Profile Object  */
let myProfile = {
   name: "Ronaldo Venancio da Silva",
   photo: {
    src: "images/myimageronaldovenancio.png",
    alt: "My Profile Picture"
   },
   favoriteFoods: [
      "Chocolate Cake", 
      "Pizza",  
      "Shrimp", 
      "Ice Cream",
      "Chocolate Pie"
   ],
   hobbies: [
      "Al Development",
      "Soccer",
      "Running"
   ],
   placesLived:[] 
};

/*
let place1 = {place: "Recife, Brazil", length: "47 Years"};
let place2 = {place: "Toronto, Canada", length: "1 Year"};
let place3 = {place: "Porto, Portugal", length: "2 Years"};
*/

/* Populate Profile Object with placesLive objects */
/* Name */
document.querySelector("#name").innerHTML = `My name is <em>${myProfile.name}</em>`;


/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
   let li =document.createElement("li");
   li.textContent = item;
   document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(item => {
   let li =document.createElement("li");
   li.textContent = item;
   document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
// myProfile.placesLived.push(place1, place2, place3);

myProfile.placesLived.push(
   {
      place: "Recife, Brazil",
      length: "47 Years"
   },
   {
      place: "Toronto, Canada",
      length: "1 Year"
   },
   {
      place: "Porto, Portugal",
      length: "2 Years"
   }
)

// Places Lived
myProfile.placesLived.forEach((place) => {
   // console.log(place);
   let dt = document.createElement("dt");
   let dd = document.createElement("dd");
   dt.textContent = place.place;
   dd.textContent = place.length;
   document.querySelector("#places-lived").appendChild(dt);
   document.querySelector("#places-lived").appendChild(dd);
 });

/* DOM Manipulation - Output */












