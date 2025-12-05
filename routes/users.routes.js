import express from "express";

import { actualizarIdiomas, filtrarPorIdioma } from "../controllers/usuarios.controller.js";

const router = express.Router();

// Ruta para actualizar los idiomas de un usuario
router.put("/idiomas", actualizarIdiomas);

// Ruta para filtrar usuarios por idioma
router.get("/filtrar", filtrarPorIdioma);

export default router;
