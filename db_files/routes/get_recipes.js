const express = require("express");

const routes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

routes.route("/search_recipes").get(async (req, res) => {
  let db_connect = dbo.getDb();
  let collection = db_connect.collection("all_recipes");
  let r = await collection
    .find()
    .toArray()
    .then((r) => {
      return r;
    });
  console.log(req.query.search);

  let arr = req.query.ingredients;
  arr.push(req.query.search);
  //arr = req.query.ingredients + " " + req.query.search;
  let query = [];
  if (req.query.ingredients.length == 0) {
    query = [
      {
        $match: {
          $or: [
            {
              tag: { $regex: new RegExp(req.query.search, "i") },
            },
            {
              title: { $regex: new RegExp(req.query.search, "i") },
            },
            {
              ingredients: { $regex: RegExp(req.query.search, "i") },
            },
          ],
        },
      },
    ];
  } else {
    query = [
      {
        $search: {
          index: "search",
          text: {
            query: req.query.ingredients,
            path: "ingredients",
          },
        },
      },
      {
        $match: {
          $or: [
            {
              tag: { $regex: new RegExp(req.query.search, "i") },
            },
            {
              title: { $regex: new RegExp(req.query.search, "i") },
            },
            {
              ingredients: { $regex: RegExp(req.query.search, "i") },
            },
          ],
        },
      },
    ];
  }

  let result = await collection
    .aggregate(query)
    .limit(100)
    .toArray()
    .then((r) => {
      return r;
    });
  console.log(result.length);
  res.json(result);
});

module.exports = routes;
