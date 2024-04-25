const router = require("express").Router();
const carCtrl = require("../controller/carCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/car", authMiddlewear, carCtrl.add);

module.exports = router;
