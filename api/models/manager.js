const Card = require("./card");

class Manager{
    cardCollection;
    rows;
    cols;
    numbers;

    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.cardCollection = new Array();
        this.numbers = new Array();
    }

    addCard(){
        let myCard = new Card(this.rows, this.cols);
        myCard.generateValues();
        myCard.id= this.cardCollection.length +1;
        //comprobar que el id no está repetido. Cuidao
        this.cardCollection.push(myCard);
        return myCard;
    }
    
    addCardWithName(name){
        let myCard = new Card(this.rows, this.cols);
        myCard.generateValues();
        myCard.id= this.cardCollection.length +1;
        myCard.addName(name);
        //comprobar que el id no está repetido. Cuidao
        this.cardCollection.push(myCard);
        return myCard;
    }

    getCardCollection(){
        return this.cardCollection;
    }

    getCardWithId(id){
        //hay que mejorar esto.
        return this.cardCollection[id-1];
    }

    getCardIds(){
        let result = new Array();
        for(const i in this.cardCollection){
            result.push(this.cardCollection[i].id);
        }
        return result;
    }

    getNumbers(){
        return this.numbers;
    }

    addNumber(){
        let rndmNmbr
        do{
            rndmNmbr = Card.getRndInteger(0,99);
        }while(this.numbers.includes(rndmNmbr));
        this.numbers.push(rndmNmbr);
        //actualizar todas las cards.
        for(const i in this.cardCollection){
            this.cardCollection[i].acquireNumber(rndmNmbr);
        }
        return rndmNmbr;
    }

    deleteCardCollection(){
        this.cardCollection = [];
        return this.cardCollection;
    }


}

const myManager = new Manager(3,9);
//module.exports = Manager;
module.exports = myManager;