const express = require("express");
const router = express.Router();

const {
  createShortUrl,
  redirectUrl,
  getReport
} = require("../controllers/urlController");

router.post("/shorten", createShortUrl);
router.get("/:code/report", getReport);
router.get("/:code", redirectUrl);

module.exports = router;