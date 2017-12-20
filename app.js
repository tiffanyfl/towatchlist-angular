const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //parse incoming data in
const cors = require('cors'); //make a request to the API
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database, {useMongoClient: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' +config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error ' +err);
});

const app = express();

const users = require('./routes/users');
const towatch = require('./routes/towatch');
const films = require('./routes/films');

// Port number
const port = 3000;

// CORS MiddleWare
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/towatches', towatch);
app.use('/films', films);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//
//app.get('*',(req, res) => {
//    res.sendFile(path.join(__dirname, 'public/index.html'));
//})

//Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
