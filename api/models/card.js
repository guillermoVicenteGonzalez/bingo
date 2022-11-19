//un carton es un array de 3x8
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}



class Card {
    acquiredValues;
    values;
    id;
    rows;
    cols;
    name;

    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;
        this.values = new Array(cols);
        this.acquiredValues = new Array(cols)
        for(let i =0; i<this.cols;i++){
            this.values[i] = new Array(this.rows);
            this.acquiredValues[i] = new Array(this.rows);
        }
    }

    static getRndInteger(min,max){
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    setId(value){
        this.id = value;
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
                this.acquiredValues[i][j] = false;
            }
        }
    }

    showValues(){
        console.log(this.values);
    }

    searchNumber(number){
        for(let i=0; i<this.cols;i++){
            for(let j=0;j<this.rows;j++){
                if(this.values[i][j] == number){
                    console.log("indices:",i,j);
                    return [i,j];
                }
            }
            console.log("no coincide");
            return undefined;
        }
    }

    acquireNumber(number){
        let index = this.searchNumber(number);
        if(index != undefined){
            let indexX = index[0];
            let indexY = index[1];
            console.log(indexX, indexY);
            this.acquiredValues[indexX][indexY] = true;
            return true;
        }
        return false;
    }

    getAcquiredValues(){
        return this.acquiredValues;
    }

    checkLine(){
        let result = false;
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.cols;j++){
                if(this.acquiredValues[i][j] == false){
                    result = false;
                    break;
                }else{
                    result = true;
                }
            }
        }
        return result;
    }

    checkBingo(){
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.cols;j++){
                if(this.acquiredValues[i][j] == false)
                    return false;
            }
        }
        return true;
    }

    get Values(){
        return this.values;
    }

    addName(name){
        this.name = name;
    }

}

module.exports = Card;