const { validateId } = require("./general");

const { validateLogin, validateRegister } = require("./auth");
const { validateEstacion } = require("./estacion");

module.exports = {
  validateId,

  validateLogin,
  validateRegister,
  validateEstacion,
};
