const express = require("express"),
    getHighline = require("../controllers/highlineController"),
    highlineRouter = express.Router();

// /api/highline  get highline
// http://localhost/api/highline
// http://localhost:8000/highline
highlineRouter.get("/", getHighline);
module.exports = highlineRouter;
