const express = require("express");
const router = express.Router();

const controller = require("../controllers/paciente-controller");

router.get("/", controller.get);
router.get("/search", controller.getByNome);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete)


module.exports = router;