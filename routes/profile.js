const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profile");
router.get("/:id", getProfile);
module.exports = router;
