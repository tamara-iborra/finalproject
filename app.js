import "dotenv/config";

import express from "express";
import { engine } from "express-handlebars";

// db = database = base de datos
import cloudinary from "./config/cloudinary.js";
import { db, initLowDB } from "./config/lowdb.js";
import upload from "./config/multer.js";

const app = express();
const PORT = 3000;

initLowDB();

// Configurar Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Ruta para el landing = index.handlebars

app.get("/", async (req, res) => {
  await db.read();
  res.render("home", {
    cartas: db.data.cartas
  });
});

// Ejemplo de ruta para crear carta
app.post("/crear-carta", async (req, res) => {
  const { titulo, contenido } = req.body;

  db.data.cartas.push({
    id: Date.now(),
    titulo,
    contenido
  });

  await db.write();

  res.redirect("/");
});

// Ruta para enviar carta
app.post("/enviar-carta", upload.single("cartaImg"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "cartas"
  });

  console.log("Imagen subida a:", result.secure_url);

  res.send("Carta enviada correctamente");
});

// Ruta para enviar la carta o otro usuari@ desconocida (=convertir la carta finalizada en formato png y subir la carta como un archivo de imagen a Cloudinary y k sea enviada a otro usuari@ random)

// Siempre va ultimo el port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
