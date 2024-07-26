const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth');
const anggotaRoutes = require('./routes/anggota');
const bukuRoutes = require('./routes/buku');
const petugasRoutes = require('./routes/petugas');
const inventarisRoutes = require('./routes/inventaris');
const pinjamRoutes = require('./routes/pinjam');
const tamuRoutes = require('./routes/tamu');
const rakRoutes = require('./routes/rak');

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/anggota', anggotaRoutes);
app.use('/api/buku', bukuRoutes);
app.use('/api/petugas', petugasRoutes);
app.use('/api/inventaris', inventarisRoutes);
app.use('/api/pinjam', pinjamRoutes);
app.use('/api/tamu', tamuRoutes);
app.use('/api/rak', rakRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
