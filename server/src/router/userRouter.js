const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");

router.get("/user", userCtrl.getUsers);
router.get("/user/:id", userCtrl.getUserId);

module.exports = router;
