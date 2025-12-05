import { db } from "../config/lowdb.js";

// Actualizar o guardar idiomas de un usuario
export const actualizarIdiomas = async (req, res) => {
  const { userId, idiomas } = req.body;

  if (!userId || !idiomas) {
    return res.status(400).json({ mensaje: "Faltan datos" });
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

// Filtrar usuarios que hablen un idioma específico
export const filtrarPorIdioma = async (req, res) => {
  const { idioma } = req.query;

  if (!idioma) return res.status(400).json({ mensaje: "No se especificó idioma" });

  await db.read();

  const filtrados = db.data.users.filter(u => u.idiomas.includes(idioma));

  res.json(filtrados);
};
