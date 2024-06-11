const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const router = express.Router()
const { getUsersForSidebar } = require("../controllers/user.controller")
router.get('/', protectRoute, getUsersForSidebar)

module.exports = router;