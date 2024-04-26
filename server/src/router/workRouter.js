const router = require("express").Router();
const workCtrl = require("../controller/workCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/work", authMiddlewear, workCtrl.add);
router.get("/work", workCtrl.get);
router.get("/work/:id", workCtrl.getOne);

module.exports = router;
