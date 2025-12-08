import express from "express";
import { db } from "../../config/lowdb";

const authApiRouter = express.Router();

authApiRouter.post("/signup", (req, res) => {
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

authApiRouter.post("/login", (req, res) => {
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

export {
  authApiRouter
}