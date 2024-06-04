require("dotenv/config");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./database/mongo");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 3001;
const app = express();

const CustomError = require("./models/customError");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Api" });
});

app.use("/api", require("./routes/index"));

// app.all("*", (req, res, next) => {
//   // res.json({ message: "404 - not found" });
//   next(new CustomError("No esta autorizado", 403));
// });
app.use(errorHandler);

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Api running on http://localhost:${PORT}`);
  });
});
