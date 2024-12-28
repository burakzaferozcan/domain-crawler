var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    companyCount: 123,
    lastUpdateDate: new Date().toDateString(),
  });
});

module.exports = router;
