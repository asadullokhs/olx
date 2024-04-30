const express = require("express");
const router = express.Router();

const messageCtrl = require("../controller/messageCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/message", authMiddlewear, messageCtrl.addMessage);
router.get("/message/:chatId", authMiddlewear, messageCtrl.getMessage);
router.delete("/message/:messageId", authMiddlewear, messageCtrl.deleteMessage);
router.put("/message/:messageId", authMiddlewear, messageCtrl.updateMessage);

module.exports = router;
