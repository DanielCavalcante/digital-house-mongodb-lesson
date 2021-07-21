const express = require("express");
const foodModel = require("../models/food");
const app = express();

app.get("/foods", async (req, res) => {

  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/food", async (request, response) => {
    const food = new foodModel(request.body);
  
    try {
      await food.save();
      response.send(food);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;
