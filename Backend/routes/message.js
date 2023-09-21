const express = require("express"),
    messageRouter = express.Router(),
    getMessage = require("../controllers/messageController");
// /api/message    get message
// http://loacalhost:80/api/message
// http://localhost:8000/message
messageRouter.get("/", getMessage);
module.exports = messageRouter;
