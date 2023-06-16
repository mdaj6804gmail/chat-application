const express = require("express");
const { getlogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtml");
const router = express.Router();


// login page
router.get("/", decorateHtmlResponse("Login "),getlogin);

module.exports = router;
