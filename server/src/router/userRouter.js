
const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");

router.get("/user", userCtrl.getUsers);
router.get("/user/:id", userCtrl.getUserId);
router.delete("/user/:id", userCtrl.deleteUser);
router.put("/user/:id", userCtrl.updateUser);

module.exports = router;
