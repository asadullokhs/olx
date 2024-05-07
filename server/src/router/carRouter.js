const router = require("express").Router();
const carCtrl = require("../controller/carCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/car", authMiddlewear, carCtrl.add);
router.get("/car", carCtrl.get);
router.get("/car/:id", carCtrl.getOne);
router.get("/prod/similar", carCtrl.similar);
router.delete("/car/:id", authMiddlewear, carCtrl.delete);
router.put("/car/:id", authMiddlewear, carCtrl.update);

module.exports = router;
