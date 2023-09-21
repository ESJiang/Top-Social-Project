const axios = require("axios"),
    { request } = require("../db.json");

function checkId(res, id) {
    if (id < 1 || id > request.length) return res.status(404).send("id not found");
}

async function getRequest(req, res, next) {
    try {
        const url = "//localhost:8000/request";
        const request = await axios.get(url);
        res.status(200).json({
            msg: "get request succeed",
            data: request.data,
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

async function getRequestByQueryId(req, res, next) {
    try {
        if (!req.query.id) return res.status(400).send("please provide a valid request id");
        checkId(res, req.query.id);
        const url = "//localhost:8000/request?id=" + req.query.id;
        const request = await axios.get(url);
        res.status(200).json({
            msg: "get request succeed",
            data: request.data,
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

async function getRequestByParamId(req, res, next) {
    try {
        if (!req.params.request_id) return res.status(400).send("please provide a valid request id");
        checkId(res, req.params.request_id);
        const url = "//localhost:8000/request/" + req.params.request_id;
        const request = await axios.get(url);
        res.status(200).json({
            msg: "get request succeed",
            data: request.data,
        });
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}

module.exports = {
    getRequest,
    getRequestByQueryId,
    getRequestByParamId,
};
