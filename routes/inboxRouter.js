const express = require("express");
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtml");
const router = express.Router();

router.get("/",decorateHtmlResponse("inbox "), getInbox);

module.exports = router;
