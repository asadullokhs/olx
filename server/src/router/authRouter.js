const router = require("express").Router();
const authCtrl = require("../controller/authCtrl");

router.post("/login", authCtrl.login);
router.post("/register", authCtrl.signup);
router.post("/googleAuth", authCtrl.googleAuth);

module.exports = router;
