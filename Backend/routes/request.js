const express = require("express"),
    { getRequest, getRequestByParamId, getRequestByQueryId } = require("../controllers/requestController"),
    requestRouter = express.Router();

requestRouter.get("/all", getRequest);
requestRouter.get("/", getRequestByQueryId);
requestRouter.get("/:request_id", getRequestByParamId);
module.exports = requestRouter;
