const express = require("express");
const burgers = require("../models/burger");
const router = express.Router();

router.get("/", ((req, res) => {
    burgers.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  }));
  
  router.post("/api/burgers", ((req, res) =>  {
    burgers.create([
      "name", "devoured"], [req.body.name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  }));
  
  router.put("/api/burgers/:id", ((req, res) => {
     
  
    console.log("condition", condition);
  
    burgers.update({
      devoured: req.body.devoured
    },
    ({ id: req.params.id}), function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  }));

  module.exports = router;