const express = require("express");

const routes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

routes.route("/search_recipes").get(async (req, res) => {
    let db_connect = dbo.getDb();
    let collection = db_connect.collection("all_recipes");
    let r = await collection.find().toArray().then((r)=>{return r});
    const query = [
        {
          $search:
            {
              index: "search",
              text: {
                query: req.query.ingredients,
                path: "ingredients",
              },
            },
        },
        {
            $match:{
                $or:[
                     {
                        tag: {$regex: /req.query.search/i},
                     },
                     {
                        title: {$regex: /req.query.search/i}
                     }
                ]
            }
        },
      ]
    let result = await collection
    .aggregate(query)
    .limit(100)
    .toArray()
    .then((r)=>{return r})
    
    let arr = req.query.ingredients;
    arr.push(req.query.search)
    //arr = req.query.ingredients + " " + req.query.search;
    const query2 = [
        {
          $search:
            {
              index: "search",
              text: {
                query: arr,
                path: "ingredients",
              },
            },
        }
      ]
    
    let result2 = await collection
    .aggregate(query2)
    .limit(100)
    .toArray()
    .then((r)=>{return r});
    result = result.concat(result2);
    res.json(result);
    
})

module.exports = routes;
