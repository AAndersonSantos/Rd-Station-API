require('dotenv').config();
const port = process.env.PORT || 8080
const token = process.env.TOKEN
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/v1', async (req, res) => {
    const url = `https://crm.rdstation.com/api/v1/deals?token=${token}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
    console.log("Servidor conectado na porta: " + port)
})