const express = require("express");

const routes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

routes.route("/search_recipes").get(async (req, res) => {
    let db_connect = dbo.getDb();
    let collection = db_connect.collection("sample");
    let r = await collection.find().toArray().then((r)=>{return r});
    console.log(r);
    const query = [
        {
          $search:
            {
              index: "default",
              text: {
                query: req.query.ingredients,
                path: "ingredients",
              },
            },
        },
        {
          $match:
            {
              tag: req.query.search,
            },
        },
      ]
    let result = await collection
    .aggregate(query)
    .limit(100)
    .toArray()
    .then((r)=>{return r})
    
    console.log(result)
    
    let arr = req.query.ingredients + " " + req.query.search
    const query2 = [
        {
          $search:
            {
              index: "default",
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
    
    console.log(result2)
    if(result.length == 0){
        res.json(result2);
    }
    else{
        res.json(result);
    }
    
})

module.exports = routes;
