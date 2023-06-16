// extarter import
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const DatabaseCongigur = require("./DataBasConection/DataBasConetion");
const path = require("path");
const cookieParser = require("cookie-parser");


// internal Import
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHandler");

const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const indexRouter = require("./routes/inboxRouter");

// inasialization app
const app = express();

// Database Configuration
DatabaseCongigur();

// initialization App Use functions
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
// set static Folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routes setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", indexRouter);

// 404 not found
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

// app listening

app.listen(process.env.PORT, () => {
  console.log("app listening http://localhost:3000");
});
