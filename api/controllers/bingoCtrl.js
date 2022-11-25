const Manager = require("../models/manager");

exports.createCard = async function(req,res){
    let msg;

    let result = await Manager.addCard();
    console.log("hola");
    res.status(200).json({success:true, data:result});
}

exports.getAllCards = async function(req,res){
    let result = await Manager.getCardCollection();
    if(result){
        console.log("Success: retrieving card collection");
        res.status(200).json({success:true, data:result});
    }else{
        let msg = "Error: couldn't retrieve card collection";
        console.log(msg);
        res.status(400).json({success:false, message:msg});
    }
}

exports.deleteAllCards = async function(req,res){
    result = await Manager.deleteCardCollection();
    if(result){
        console.log("Success: deleting card collection");
        res.status(200).json({success:true,data:result});
    }else{
        msg = "Error: Could not delete card Collection";
        console.log(msg);
        res.status(400).json({success:false, message:msg});
    }
}

exports.getCardValues = async function(req,res){
    let cardId = req.params.id;
    let myValues = await Manager.getCardWithId(cardId).showValues();

   //let myValues = myCard.showValues();
    res.status(200).json({success:true,data:myValues});
    //console.log(myValues);
}

/**
 * Numbers
 */

exports.addNumer = async function(req,res){
    result = await Manager.addNumber();
    if(result){
        console.log("Success: adding number -> ",result);
        res.status(200).json({success:true,data:result});
    }else{
        let msg = "Error: couldnt add number to the list";
        console.log(msg);
        res.status(400).json({success:false, message:msg});
    }
}

exports.getNumbers = async function(req,res){
    result = await Manager.getNumbers();
    if(result){
        console.log("Success: retrieving numbers");
        res.status(200).json({success:true, data:result});
    }else{
        let msg = "Error: couldn't retrieve numbers";
        console.log(msg);
        res.status(400).json({success:true, message:msg});
    }
}

