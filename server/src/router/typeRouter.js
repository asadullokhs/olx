const router = require("express").Router();
const typeCtrl = require("../controller/typeCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/type", authMiddlewear, typeCtrl.add);
router.get("/type", authMiddlewear, typeCtrl.get);
router.delete("/type/:id", authMiddlewear, typeCtrl.delete);

module.exports = router;
