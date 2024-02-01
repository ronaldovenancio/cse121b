let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(87);
console.log(`${target}`);


let pagination = 10;
let i = 1;
while ( i >= pagination ) {
  console.log('pass');
  i++;
}

/* studentReport.forEach(function (item) { 
  if (item > SCORE) {
    document.querySelector('#output').textContent += item;
  }
}); */

let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'};
//let dose = esomeprazole.amount(); This doesn't work
//let dose = esomeprazole.amount; This work well
let dose = esomeprazole['amount']; // This work well. So we have two options!!!
//let dose = esomeprazole.mnb78932.amount;
console.log(`${dose}`);

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    _________;
  }
}
