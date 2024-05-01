const router = require("express").Router();
const workCtrl = require("../controller/workCtrl");
const authMiddlewear = require("../middlewear/authMiddleware");

router.post("/work", authMiddlewear, workCtrl.add);
router.get("/work", workCtrl.get);
router.get("/work/:id", workCtrl.getOne);
router.delete("/work/:id", authMiddlewear, workCtrl.delete);
router.put("/work/:id", authMiddlewear, workCtrl.update);
router.get("/works/similar", workCtrl.similar);

module.exports = router;
