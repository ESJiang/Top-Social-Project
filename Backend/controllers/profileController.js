const axios = require("axios");

async function getProfile(req, res, next) {
    try {
        const url = "//localhost:8000/profile";
        const profile = await axios.get(url);
        console.log("profile", profile.data);
        res.status(200).json({
            msg: "get profile succeed",
            data: profile.data,
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

module.exports = getProfile;
