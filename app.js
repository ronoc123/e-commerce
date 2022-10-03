require("dotenv").config();
require("express-async-errors");

// server setup
const express = require("express");
const app = express();

const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

const { dirname } = require("path");
const { fileURLToPath } = require("url");
const path = require("path");

//routers
const authRouter = require("./routes/auth");
const userRouter = require("./routes/User");
const productRouter = require("./routes/Product");
const reviewRouter = require("./routes/Reviews");
const orderRouter = require("./routes/orders");

//rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
// DB connect
const connectDB = require("./db/connect");
//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const user = require("./models/user");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2000,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(xss());
app.use(limiter);
app.use(mongoSanitize());

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/v1", (req, res) => {
  res.send("e-commerce api");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/order", orderRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
