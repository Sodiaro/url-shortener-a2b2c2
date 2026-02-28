const { db } = require("../data/store");
const generateCode = require("../utils/generateCode");
const containsMalware = require("../utils/malwareFilter");
const bufferedSave = require("../utils/bufferedSave");

// CREATE SHORT URL
exports.createShortUrl = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "URL required"
    });
  }

  if (containsMalware(url)) {
    return res.status(400).json({
      error: "Blocked URL"
    });
  }

  const code = generateCode();

  db[code] = {
    url,
    clicks: 0,
    used: false,
    createdAt: new Date().toISOString()
  };

  bufferedSave();

  res.status(201).json({
    shortUrl: `http://localhost:3000/${code}`
  });
};


// REDIRECT
exports.redirectUrl = (req, res) => {
  const code = req.params.code;
  const link = db[code];

  if (!link) {
    return res.status(404).json({
      error: "Link not found"
    });
  }

  if (link.used) {
    return res.status(404).json({
      error: "Link already used"
    });
  }

  link.clicks += 1;
  link.used = true;

  bufferedSave();

  res.redirect(302, link.url);
};


// REPORT
exports.getReport = (req, res) => {
  const code = req.params.code;
  const link = db[code];

  if (!link) {
    return res.status(404).json({
      error: "Link not found"
    });
  }

  res.json({
    code,
    url: link.url,
    clicks: link.clicks,
    used: link.used,
    createdAt: link.createdAt
  });
};