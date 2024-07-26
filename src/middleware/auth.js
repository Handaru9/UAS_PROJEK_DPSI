require('dotenv').config(); // Import dotenv

const jwt = require('jsonwebtoken');
console.log('Secret Key:', process.env.TOKEN_SECRET);

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  console.log('Token diterima:', token);
  if (!token) {
      return res.status(401).json({ message: 'Token tidak ditemukan' });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
          console.log('Error verifikasi token:', err);
          return res.status(401).json({ message: 'Token tidak valid' });
      }
      console.log('Decoded:', decoded); // Tambahkan log untuk melihat payload token
      req.user = decoded;
      next();
  });
};

module.exports = authMiddleware;
