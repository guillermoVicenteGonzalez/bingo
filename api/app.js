const Card = require("./models/card");


const myCard = new Card(3,9);
myCard.generateValues();
myCard.showValues()
console.log("\n");
let values = myCard.values;
//console.log(values);
let result = myCard.searchNumber(2);
let number = myCard.acquireNumber(2);
console.log(myCard.getAcquiredValues());
console.log(myCard.checkLine());
console.log(myCard.checkBingo());