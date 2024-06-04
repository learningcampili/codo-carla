const { Router } = require("express");

const {
  createEstacion,
  getEstacions,
  getEstacion,
  updateEstacion,
  deleteEstacion,
} = require("../controllers/estacion");

const { validateEstacion } = require("../validators");

const router = Router();

router.post("/", createEstacion);
router.get("/", getEstacions);
router.get("/:id", getEstacion);
router.put("/:id", updateEstacion);
router.delete("/:id", deleteEstacion);

module.exports = router;
