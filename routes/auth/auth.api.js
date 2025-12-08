import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from "../../config/lowdb.js";

const authApiRouter = express.Router();
const JWT_SECRET = 'mi-secreto-super-seguro-12345'; // TODO: Mover a .env


// Función auxiliar para generar y guardar token
const generateAndSetToken = (res, { userId, userEmail }) => {
  const token = jwt.sign({ id: userId, email: userEmail }, JWT_SECRET, { expiresIn: '24h' });
  
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: false, // true en producción con HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  });
};

authApiRouter.post("/signup", async (req, res) => {
  try {
    await db.read()
    const { username, email, password } = req.body;

    // Error: Faltan datos:
    if (!username || !email || !password) {
      return res.render('signup', { 
        error: 'Faltan datos obligatorios: username, email, password' 
      });
    }

    // Error: Usuario ya existente:
    const existingUser = db.data.users.find(
      (u) => u.username === username || u.email === email
    );
    if (existingUser) {
      return res.render('signup', { 
        error: 'Usuario ya existe con este username o email' 
      });
    }

    // Create new user:
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: db.data.users.length + 1,
      username,
      email,
      password: hashedPassword,
      languages: [],
      createdAt: new Date().toISOString(),
    };
    db.data.users.push(newUser);
    await db.write();

    generateAndSetToken(res, { userId: newUser.id, userEmail: newUser.email });
    res.redirect('/home');

  } catch (error) {
    return res.render('signup', { 
      error: `Error en el registro ${error}` 
    });
  }
});

authApiRouter.post("/login", async (req, res) => {
  try {
    await db.read();
    const { username, password } = req.body;

    // Error: Faltan datos:
    if (!username || !password) {
      return res.render('login', { 
        error: 'Faltan datos obligatorios: username, password' 
      });
    }

    // Error: Usuario no existe:
    const user = db.data.users.find(
      (u) => u.username === username
    );
    if (!user) {
      return res.render('login', { 
        error: 'Usuario o contraseña incorrectos' 
      });
    }

    // Error: Contraseña incorrecta:
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.render('login', { 
        error: 'Usuario o contraseña incorrectos' 
      });
    }

    generateAndSetToken(res, { userId: user.id, userEmail: user.email });
    res.redirect('/home');

  } catch (error) {
    return res.render('login', { 
      error: 'Error en el inicio de sesión' 
    });
  }
});

export {
  authApiRouter
}