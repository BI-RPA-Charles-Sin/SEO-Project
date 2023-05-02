const express = require("express");
const router = express.Router();

router.get("/weekone", function (req, res, next) {
  res.render("2022WeekOne/index", { title: "Express" });
});

router.get("/weektwo", function (req, res, next) {
  res.render("2022WeekTwo/index", { title: "Express" });
});

router.get("/weekthree", function (req, res, next) {
  res.render("2022WeekThree/index", { title: "Express" });
});

module.exports = router;
