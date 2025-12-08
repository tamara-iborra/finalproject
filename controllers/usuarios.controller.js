import { db } from "../config/lowdb.js";

// Actualizar idiomas
export const actualizarIdiomas = async (req, res) => {
  let { userId, idiomas } = req.body;

  if (!userId || !idiomas) {
    return res.status(400).json({ mensaje: "Faltan datos" });
  }

  userId = Number(userId);

  if (typeof idiomas === "string") {
    idiomas = [idiomas];
  }

  await db.read();

  const usuario = db.data.users.find(u => u.id === userId);

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  usuario.idiomas = idiomas;
  await db.write();

  res.json({ mensaje: "Idiomas actualizados", idiomas: usuario.idiomas });
};

// Filtrar por idioma
export const filtrarPorIdioma = async (req, res) => {
  const { idioma } = req.query;

  if (!idioma) {
    return res.status(400).json({ mensaje: "No se especificó idioma" });
  }

  await db.read();

  const filtrados = db.data.users.filter(u => u.idiomas.includes(idioma));

  res.json(filtrados);
};
