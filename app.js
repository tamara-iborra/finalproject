import "dotenv/config";
import express from "express";
import { engine } from "express-handlebars";
import cookieParser from 'cookie-parser';

import cloudinary from "./config/cloudinary.js";
import { db, initLowDB } from "./config/lowdb.js";
import upload from "./config/multer.js";
// Middlewares
import authenticateToken from './middleware/auth.js';

// Rutas
import usersRoutes from "./routes/users.routes.js";
import { authWebRouter } from "./routes/auth/auth.web.js";
import { authApiRouter } from "./routes/auth/auth.api.js";

const app = express();
const PORT = 3000;

await initLowDB();

// Configurar Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Montar rutas externas
app.use("/auth", authWebRouter);
app.use("/api/auth", authApiRouter);
app.use("/users", usersRoutes);

app.get("/", async (_req, res) => {
  res.render("landing");
});

app.get("/home", authenticateToken, (_req, res) => {
  res.render("home", { title: "Home" });
});

// Ejemplo de ruta para crear nueva carta
app.get("/nuevacarta", async (req, res) => {
  await db.read();
  res.render("nuevacarta", {
    title: "Escribir nueva carta"
  });
});

app.post("/nuevacarta", async (req, res) => {
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
app.post("/enviarcarta", upload.single("cartaImg"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "cartas"
  });

  console.log("Imagen subida a:", result.secure_url);

  res.send("Tu carta ha sido enviado al metaverso");
});

app.use("/users", usersRoutes);
// Funcionalidad para enviar la carta o otro usuari@ desconocida (=convertir la carta finalizada en formato png y subir la carta como un archivo de imagen a Cloudinary y k sea enviada a otro usuari@ random)

// Siempre va ultimo el port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
