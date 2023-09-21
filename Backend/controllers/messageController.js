const axios = require("axios");

async function getMessage(req, res, next) {
    try {
        const url = "//localhost:8000/message";
        const message = await axios.get(url);
        console.log("message", message);
        res.status(200).json({
            msg: "get message succeed",
            data: {
                message: message.data,
            },
        });
        // throw new Error("server yas error");
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

module.exports = getMessage;
