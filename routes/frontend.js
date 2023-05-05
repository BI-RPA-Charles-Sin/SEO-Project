const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("weekone", { title: "The F2E 2022 | 活動網站設計", keyword: "前端,前端开发,web前端技术,前端设计,thef2e,2022 thef2e", desc: "參加 2022 六角學院活動網站設計的作品" });
});

router.get("/weekone", function (req, res, next) {
  res.render("weekone", { title: "The F2E 2022 | 活動網站設計", keyword: "前端,前端开发,web前端技术,前端设计,thef2e,2022 thef2e", desc: "參加 2022 六角學院活動網站設計的作品" });
});

router.get("/weektwo", function (req, res, next) {
  res.render("weektwo", { title: "The F2E 2022 | 今晚，我想來點點簽", keyword: "今晚，我想來點點簽,the f2e,thef2e,前端,前端开发,web前端技术,前端设计,2022 thef2e", desc: "參加 2022 六角學院今晚，我想來點點簽的作品" });
});

router.get("/weekthree", function (req, res, next) {
  res.render("weekthree", { title: "The F2E 2022 | Scrum 新手村", keyword: "Scrum 新手村,thef2e,前端,前端开发,web前端技术,前端设计,2022 thef2e", desc: "參加 2022 六角學院作品: Scrum 新手村" });
});

module.exports = router;
