const router = require("express").Router();
const categoryCtrl = require("../controller/categoryCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/category", authMiddlewear, categoryCtrl.add);
router.get("/category", categoryCtrl.get);
router.get("/category/:id", categoryCtrl.getCategoryById);
router.delete("/category/:id", authMiddlewear, categoryCtrl.delete);

module.exports = router;
