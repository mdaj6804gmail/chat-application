const express = require("express");
const { getusers } = require("../controller/usercontroller");
const decorateHtmlResponse = require("../middleware/common/decorateHtml");
const router = express.Router();

router.get("/", decorateHtmlResponse("Users "), getusers);

module.exports = router;
