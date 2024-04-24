const router = require("express").Router();
const categoryCtrl = require("../controller/categoryCtrl");

router.post("/category", categoryCtrl.add);
router.get("/category", categoryCtrl.get);
router.get("/category/:id", categoryCtrl.getCategoryById);

module.exports = router;
