const router = require("express").Router();
const fashionCtrl = require("../controller/fashionCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/fashion", authMiddlewear, fashionCtrl.add);
router.get("/fashion", fashionCtrl.get);
router.get("/fashion/:id", fashionCtrl.getOne);
router.delete("/fashion/:id", fashionCtrl.delete);
router.put("/fashion/:id", fashionCtrl.update);

module.exports = router;
