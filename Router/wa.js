const express = require("express");
const router = express.Router();
const api = require("../Controller/WAController")
const testapi = require("../Controller/cobaController")

router.get("/", testapi);
router.post("/sendWA", api);
module.exports = router;