const CustomError = require("../models/customError");
const Estacion = require("../models/Estacion");
const { capitalizeEachWord } = require("../utils/common");

const createEstacion = async (req, res, next) => {
  const { pais, ciudad, dia, salida } = req.body;

  console.log(capitalizeEachWord(ciudad));
  try {
    const estacion = await Estacion.create({
      pais,
      ciudad,
      dia,
      salida,
    });
    res.json(estacion);
  } catch (error) {
    next(error);
  }
};

const getEstacions = async (req, res, next) => {
  try {
    const estaciones = await Estacion.find({});
    res.json(estaciones);
  } catch (error) {
    next(error);
  }
};

const getEstacion = async (req, res, next) => {
  const { id } = req.params;

  try {
    const estacion = await Estacion.findById(id);
    if (!estacion) {
      throw new CustomError("Item not found", 404);
    }
    res.json(estacion);
  } catch (error) {
    next(error);
  }
};

const updateEstacion = async (req, res, next) => {
  try {
    res.json({ message: "update Estacion" });
  } catch (error) {
    next(error);
  }
};

const deleteEstacion = async (req, res, next) => {
  const { id } = req.params;
  try {
    const estacion = await Estacion.findByIdAndDelete(id);
    if (!estacion) {
      throw new CustomError("Item not found", 404);
    }
    res.json({ message: "La estacion fue eliminada" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEstacion,
  getEstacions,
  getEstacion,
  updateEstacion,
  deleteEstacion,
};
