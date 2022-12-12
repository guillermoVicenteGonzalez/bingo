const{ Router } = require("express");
//const ManagerCtrl = require("../controllers/managerCtrl");
//const bingoCtrl = require("../controllers/bingoCtrl");
const bingoCtrl = require("../controllers/bingoCtrl");

const router = Router();

router.route("/bingo/cards")
    //.get(ManagerCtrl.createManager);
    .post(bingoCtrl.createCard)
    .get(bingoCtrl.getAllCards)
    .delete(bingoCtrl.deleteAllCards);

router.route("/bingo/cards/:id")
    .get(bingoCtrl.getCardById)

router.route("/bingo/values")
    .post(bingoCtrl.addNumer)
    .get(bingoCtrl.getNumbers)

router.route("bingo/values/:id")
    .get(bingoCtrl.getCardValues)



module.exports = router;