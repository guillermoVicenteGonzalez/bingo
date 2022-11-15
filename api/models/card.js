//un carton es un array de 3x8
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class Card {
    values;
    id;
    rows;
    cols;

    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;
        this.values = new Array(cols);
        for(let i =0; i<this.cols;i++){
            this.values[i] = new Array(this.rows);
        }
    }

    generateValues(){
        for(let i =0; i<this.cols;i++){
            for(let j=0;j<this.rows;j++){
                let min = 0 + i * 10;
                let max = min + 9;
                do{
                    var value = getRndInteger(min,max);
                }while(this.values[i].includes(value));
                /*console.log(value);
                values.push(value);*/
                this.values[i][j] = value;
                console.log(this.values[i][j]);
            }
            console.log("\n");
        }
    }

    showValues(){
        console.log(this.values);
    }

    get Values(){
        return this.values;
    }

}

module.exports = Card;