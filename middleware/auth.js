import jwt from 'jsonwebtoken';

const JWT_SECRET = 'mi-secreto-super-seguro-12345';

// Middleware para verificar si el usuario está logueado
export const blockWhenNoAuthToken = (req, res, next) => {
  const token = req.cookies.authToken;

  console.log('req.cookies:', req.cookies)

  if (!token) {
    return res.redirect('/auth/login');
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.clearCookie('authToken');
      return res.redirect('/auth/login');
    }
    req.user = user;
    next();
  });
};

// Middleware para registrar cuando el usuario está logeado y usarlo en las plantillas 
export const authState = (req, res, next) => {
  const token = req.cookies?.authToken;

  console.log("Token:", token)
  
  res.locals.isLoggedIn = !!token;
  next();
};
