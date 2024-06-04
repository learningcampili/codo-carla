const { check } = require("express-validator");
const { handleValidator } = require("../utils/handleValidator");
//Allways base on the Model

const validateEstacion = [
  check("pais", "El Pais es requerido").exists().notEmpty(),
  check("ciudad", "la ciudad es requerida").exists().notEmpty(),
  check("dia")
    .exists()
    .notEmpty()
    .toLowerCase()
    .isIn([
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
      "domingo",
    ]),
  check("salida")
    .exists()
    .notEmpty()
    .isTime({
      hourFormat: "hour24" | "hour12",
    }),

  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

const validateEstacionUpdate = [
  check("name", "The mail is required")
    .exists()
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("The name must have at least 3 characters"),
  check("email", "The email is required")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Enter a valid email"),
  check("password", "The password is required").exists().notEmpty(),
  // check("album").exists().notEmpty(),
  // check("mediaId").exists().notEmpty().isMongoId(),
  // check("cover").exists().notEmpty().isURL(),
  // check("artist").exists().notEmpty(),
  // check("artist.name").exists().notEmpty(),
  // check("artist.nickname").exists().notEmpty(),
  // check("artist.nationality").exists().notEmpty(),
  // check("duration.start").exists().notEmpty(),
  // check("duration.end").exists().notEmpty(),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

module.exports = { validateEstacion, validateEstacionUpdate };
