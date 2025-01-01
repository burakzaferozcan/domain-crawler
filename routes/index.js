var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    companyCount: 0,
    lastUpdateDate: new Date().toDateString(),
  });
});

router.get("/domain/:extension", function (req, res, next) {
  let extension = req.params.extension;
  res.render("domain", {
    title: `Prices for '${extension}' Extension`,
    extension,
    companyCount: 0,
    lastUpdateDate: new Date().toDateString(),
  });
});

module.exports = router;
