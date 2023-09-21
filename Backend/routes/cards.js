const express = require("express"),
    { getCardList, getCardById, postCard, deleteCardById } = require("../controllers/cardsController"),
    cardsRouter = express.Router();

cardsRouter.get("/all", getCardList);

// /api/cards?id=1    get card
// http://localhost/api/cards?id=1
// http://localhost:8000/cards?id=1
cardsRouter.get("/", getCardById);

// /api/cards        post a card
// http://localhost/api/cards
// http://localhost:8000/cards
cardsRouter.post("/", postCard);

// /api/cards/:card_id   delete card by id
// http://localhost/api/cards/:card_id
// http://localhost:8000/cards/5
cardsRouter.delete("/:card_id", deleteCardById);
module.exports = cardsRouter;
