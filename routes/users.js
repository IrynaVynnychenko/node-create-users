const express = require("express");
const fs = require("fs");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  fs.readFile("users.txt", "utf8", function(err, data) {
    if (err) throw err;
    res.render("users", {data: JSON.parse(data)});
  });
});

module.exports = router;
