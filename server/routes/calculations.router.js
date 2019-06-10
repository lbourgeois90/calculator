const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('in SERVER GET');
    pool.query(`SELECT * FROM "calculator" ORDER BY "id" DESC LIMIT 10 `)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) =>{
        console.log(`Error getting calculations !`, error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    console.log('in SERVER POST');
    console.log('Client Calculations', req.body);
    const sqlText= `INSERT INTO "calculator" ("calc_total", "value_one", "value_two", "operator") VALUES ($1, $2, $3, $4)`;
    pool.query( sqlText, [req.body.calc_total, req.body.value_one, req.body.value_two, req.body.operator])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((error) =>{
        console.log(`Error in posting calculations !`, error);
        res.sendStatus(500);
    })
})