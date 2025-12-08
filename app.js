import "dotenv/config";

import express from "express";
import { engine } from "express-handlebars";

// db = database = base de datos
import cloudinary from "./config/cloudinary.js";
import { db, initLowDB } from "./config/lowdb.js";
import upload from "./config/multer.js";
// Rutas
import usersRoutes from "./routes/users.routes.js";

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

// Montar rutas externas
app.use("/users", usersRoutes);

app.get("/", async (_req, res) => {
  res.render("home");
});

// Rutas Web Auth
app.get("/auth/signup", (req, res) => {
  res.render("signup", { title: "Sign up" });
});

app.get("/auth/login", (_req, res) => {
  res.render("login", { title: "Log in" });
});

// API Auth
app.post("/api/auth/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    // Guardar usuario en lowdb
    db.data.users.push({
      id: Date.now(),
      username,
      email,
      password,
      idiomas: [],
      createdAt: new Date().toISOString(),
    });
    db.write();

    res.redirect("/home");
  } else {
    res.redirect("/auth/signup");
  }
});

app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;

  // Ejemplo de validación contra la base de datos lowdb
  const user = db.data.users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.redirect("/home");
  } else {
    res.redirect("/auth/login");
  }
});

app.get("/home", (req, res) => {
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

// Funcionalidad para enviar la carta o otro usuari@ desconocida (=convertir la carta finalizada en formato png y subir la carta como un archivo de imagen a Cloudinary y k sea enviada a otro usuari@ random)

// Siempre va ultimo el port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
