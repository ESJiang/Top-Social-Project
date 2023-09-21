const express = require("express"),
    highlineRouter = require("./highline"),
    messageRouter = require("./message"),
    profileRouter = require("./profile"),
    cardsRouter = require("./cards"),
    requestRouter = require("./request"),
    router = express.Router();

router.use("/highline", highlineRouter);
router.use("/message", messageRouter);
router.use("/profile", profileRouter);
router.use("/cards", cardsRouter);
router.use("/request", requestRouter);

module.exports = router;
