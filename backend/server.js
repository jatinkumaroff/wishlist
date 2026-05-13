const express = require("express");
const app = express();
const { link } = require("node:fs");
const Attributes=require("./models/Attributes");
require("./config/connectDB");
try {
  app.listen(3000);
  console.log("connected");
} catch (e) {
  console.log("error" + e);
}

app.use("/", async (req, res) => {
  console.log("received");
  const dummyData = await Attributes.create({
    title: "",
    link: "",
    imageUrl: "",
    priority: "",
  });
  res.json({received:dummyData});
});
