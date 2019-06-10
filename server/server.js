const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const calculationsRouter = require('./routes/calculations.router')


app.use(bodyParser.json()); 
app.use(express.static('build'));

app.use('/calculations', calculationsRouter);


app.listen(port, function () {
    console.log('Listening on port: ', port);
});