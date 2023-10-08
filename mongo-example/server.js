const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://thaikhiem:25092002kh@cluster0.djn3u79.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
