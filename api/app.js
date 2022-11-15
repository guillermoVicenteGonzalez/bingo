const Card = require("./models/card");


const myCard = new Card(3,9);
myCard.generateValues();
myCard.showValues()
console.log("\n");
let values = myCard.values;
console.log(values);
