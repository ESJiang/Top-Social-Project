const axios = require("axios"),
    { cards } = require("../db.json");

function checkId(res, id) {
    if (id < 1 || id > cards.length) return res.status(404).send("id not found");
}

async function getCardList(req, res, next) {
    try {
        const url = "//localhost:8000/cards";
        const card = await axios.get(url);
        console.log("card", card.data);
        res.status(200).json({
            msg: "get card succeed",
            data: card.data,
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

async function getCardById(req, res, next) {
    const id = req.query.id;
    console.log("id", id);
    checkId(res, id);
    if (!id) return res.status(400).send("id is required");
    try {
        const url = "//localhost:8000/cards?id=" + id;
        const card = await axios.get(url);
        console.log("card", card.data);
        res.status(200).json({
            msg: "get card succeed",
            data: card.data,
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

async function postCard(req, res, next) {
    const newCard = req.body;
    console.log("newCard", newCard);
    if (Object.keys(newCard).length === 0) return res.status(400).send("card is required");
    try {
        const url = "//localhost:8000/cards";
        await axios.post(url, newCard, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        res.status(200).json({
            msg: "card is created",
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

async function deleteCardById(req, res, next) {
    const id = req.params.card_id;
    checkId(res, id);
    console.log("id", id);
    try {
        const url = "//localhost:8000/cards/" + id;
        await axios.delete(url);
        res.status(200).json({
            msg: "card is deleted",
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

module.exports = {
    getCardList,
    getCardById,
    postCard,
    deleteCardById,
};
