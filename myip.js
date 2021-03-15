const express = require('express');
const router = express.Router();

const DEBUG = false;

// @route   GET /api/myip
// @desc    Returns requester's IP.
// @access  Public
router.get('/', (req, res) => {
  // if forwarded (ex. from proxy server), get original requester's IP
  forwardedFrom = req.header('x-forwarded-for');
  ip = forwardedFrom ? forwardedFrom : req.connection.remoteAddress;

  if (DEBUG) console.log(`got message from ${ip}`);

  res.json({ ip });
});

module.exports = router;
