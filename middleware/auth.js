import jwt from 'jsonwebtoken';

const JWT_SECRET = 'mi-secreto-super-seguro-12345';

// Middleware para verificar si el usuario está logueado
const authenticateToken = (req, res, next) => {
  const token = req.cookies.authToken;

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

export default authenticateToken;