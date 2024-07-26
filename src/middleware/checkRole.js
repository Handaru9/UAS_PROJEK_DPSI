const checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    console.log('User role:', userRole); // Tambahkan log untuk melihat peran pengguna
    if (roles.includes(userRole)) {
      next();
    } else {
      return res.status(403).send('Access Denied');
    }
  };
};

module.exports = checkRole;
