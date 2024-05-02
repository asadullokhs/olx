const express = require("express");
const router = express.Router();

const chatCtrl = require("../controller/chatCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.get("/chat", authMiddlewear, chatCtrl.userChats);
router.get("/chat/:firstId/:secondId", authMiddlewear, chatCtrl.findChat);
router.delete("/chat/:chatId", authMiddlewear, chatCtrl.deleteChat);

module.exports = router;
