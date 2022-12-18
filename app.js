const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const userRoutes = require('./routes/User');
const sauceRoutes = require('./routes/Sauce')



app.use(express.json());

mongoose.connect('mongodb+srv://lauraVo:P3B2XpPCKGogazbW@cluster0.ypbro.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images'))); // permet à express de savoir où aller chercher les requetes /images

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;
