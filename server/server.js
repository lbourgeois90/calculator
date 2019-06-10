const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const calculationsRotuer = require('./routes/calculations.router')


app.use(bodyParser.json()); 
app.use(express.static('build'));

app.use('/calculations', calculationsRotuer);


app.listen(port, function () {
    console.log('Listening on port: ', port);
});