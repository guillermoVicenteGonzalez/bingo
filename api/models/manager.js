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
    }

    getCardCollection(){
        return this.cardCollection;
    }

    getCardWithId(id){
        return this.cardCollection[id];
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
    }


}

module.exports = Manager;