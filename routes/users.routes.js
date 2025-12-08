import express from "express";

import { db } from "../config/lowdb.js";
import { actualizarIdiomas, filtrarPorIdioma } from "../controllers/usuarios.controller.js";

const router = express.Router();

// Actualizar idiomas de un usuario
router.post("/idiomas", actualizarIdiomas);

// Filtrar usuarios por idioma
router.get("/filtrar", filtrarPorIdioma);

// Mostrar una vista con formulario para editar idiomas
router.get("/edit-languages", async (req, res) => {
  await db.read();

  const userId = 1; // temporal
  const usuario = db.data.users.find(u => u.id === userId);

  res.render("edit-languages", {
    title: "Editar idiomas",
    userIdiomas: usuario ? usuario.idiomas : []
  });
});

export default router;
