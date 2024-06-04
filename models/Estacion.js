const { Schema, model } = require("mongoose");

EstacionSchema = new Schema(
  {
    pais: {
      type: String,
      required: [true, "El país es requerido"],
      trim: true,
      lowercase: true,
    },
    ciudad: {
      type: String,
      required: [true, "La ciudad es requerida"],
      trim: true,
      lowercase: true,
    },
    dia: {
      type: String,
      enum: [
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
      ],
      required: [true, "El día es requerido"],
      lowercase: true,
    },
    salida: {
      type: String,
      required: [true, "La salida es requerida"],
    },
  },
  {
    collection: "estaciones",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Estacion", EstacionSchema);
