const express = require("express"),
    getProfile = require("../controllers/profileController"),
    profileRouter = express.Router();

// /api/profile  get profile
// http://localhost/api/profile
profileRouter.get("/", getProfile);
module.exports = profileRouter;
