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
        this.values = new Array(rows);
        this.acquiredValues = new Array(rows)
        for(let i =0; i<this.rows;i++){
            this.values[i] = new Array(this.cols);
            this.acquiredValues[i] = new Array(this.cols);
        }
    }

    static getRndInteger(min,max){
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    setId(value){
        this.id = value;
    }

    generateValues(){
        let count = new Array();
        for(let i =0; i<this.rows;i++){
            for(let j=0;j<this.cols;j++){
                let min = 0 + j * 10;
                let max = min + 9;
                do{
                    var value = getRndInteger(min,max);
                //}while(this.values.includes(value));
                }while(count.includes(value));
                count.push(value);
                /*console.log(value);
                values.push(value);*/
                this.values[i][j] = value;
<<<<<<< Updated upstream
                this.acquiredValues[i][j] = false;
=======
>>>>>>> Stashed changes
            }
        }
    }

    showValues(){
        console.log(this.values);
        return this.values;
    }

    searchNumber(number){
        //estan "mas o menos" ordenados -> se puede optimizar
        for(let i=0; i<this.rows;i++){
            for(let j=0;j<this.cols;j++){
                console.log(i,j);
                if(this.values[i][j] == number){
                    console.log("indices:",i,j);
                    return [i,j];
                }
            }
        }
        console.log("no coincide");
        return undefined;
    }

    acquireNumber(number){
        let index = this.searchNumber(number);
        if(index != undefined){
            let indexX = index[0];
            let indexY = index[1];
            console.log("acquiring number " + number);
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