const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());
app.get('/', (req, res) => {
    return getOneTimeUseFunction().then((response) => {
        return res.json(response);
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

let otuRequest = {};

function getOneTimeUseFunction() {
    return fetch('https://api.nexiopaysandbox.com/pay/v3/token', {
        method: 'post',
        body: JSON.stringify(otuRequest),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic eW91clVzZXJOYW1lOnlvdXJQYXNzd29yZA=='
        }
    }).then((res) => {
        return res.json();
    })
};
