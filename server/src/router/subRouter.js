const router = require("express").Router();
const subCtrl = require("../controller/subCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/sub", authMiddlewear, subCtrl.add);
router.get("/sub", subCtrl.get);
router.delete("/sub/:id", authMiddlewear, subCtrl.delete);

module.exports = router;
