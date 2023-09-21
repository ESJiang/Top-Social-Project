const axios = require("axios");

async function getHighline(req, res, next) {
    try {
        const url = "//localhost:8000/highline";
        const highline = await axios.get(url);
        res.status(200).json({
            msg: "get highline succeed",
            data: {
                highline: highline.data,
            },
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

module.exports = getHighline;
