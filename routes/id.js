const express = require("express");
const data = require("../data/footballData.json");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", function(req, res, next) {
  fs.readFile(
    path.join(__dirname, "../data/footballData.json"),
    (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    }
  );
});

router.get("/:id", function(req, res, next) {
  fs.readFile(
    path.join(__dirname, "../data/footballData.json"),
    (err, data) => {
      if (err) throw err;
      const players = JSON.parse(data);
      const player = req.params.name;
      res.json({ player });
    }
  );
});

module.exports = router;
