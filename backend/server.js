// filepath: /Users/alex/Desktop/trooxer/backend/server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(cors());
app.use(bodyParser.json());

// Conectar a MySQL
const db = mysql.createConnection({
  host: '34.66.63.218',
  user: 'usertrooxer',
  password: '3sT43s1Na(onSegura',
  database: 'contactForm',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.post('/api/contact', (req, res) => {
  const { NombreEmpresa, NombreContacto, PaginaWeb, Telefono, Whatsapp, Mensage } = req.body;
  const query = 'INSERT INTO contacts (email, name, time) VALUES (?, ?, ?)';
  db.query(query, [NombreEmpresa, NombreContacto, PaginaWeb, Telefono, Whatsapp, Mensage], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Contact saved');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});