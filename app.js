const express = require('express');
const path = require('path');
const session = require('express-session');
const photosRouter = require('./routes/photosRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'simple', resave: false, saveUninitialized: false }));
app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));

app.use('/photos', photosRouter);
app.use('/users', userRouter);

// Redirect root to /photos
app.get('/', (req, res) => res.redirect('/photos'));

module.exports = app;
