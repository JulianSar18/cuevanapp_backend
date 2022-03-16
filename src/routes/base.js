const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
router.get("/", function (req, res) {
  res.send("CRUD's");
});
module.exports = router;
