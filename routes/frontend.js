const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("weekone");
});

router.get("/weekone", function (req, res, next) {
  res.render("weekone");
});

router.get("/weektwo", function (req, res, next) {
  res.render("weektwo");
});

router.get("/weekthree", function (req, res, next) {
  res.render("weekthree");
});

module.exports = router;
