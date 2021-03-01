const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fetch = require('node-fetch');
console.log('------->loading' );
app.use(cors());
app.get('/', (req, res) => {
    return getOneTimeUseFunction().then((response) => {
        return res.json(response);
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

let otuRequest = {
    "data": {
        "customer": {
            "firstName": "Rocky",
            "lastName": "Squirrel",
            "phone": "5555551234",
            "email": "rs@example.com",
            "billToAddressOne": "123 Test St",
            "billToAddressTwo": "Suite 123",
            "billToCity": "Testerville",
            "billToState": "UT",
            "billToPostal": "12345",
            "billToCountry": "US",
            "billToPhone": "8015551234",
            "shipToAddressOne": "123 Ship St",
            "shipToAddressTwo": "Warehouse 456",
            "shipToCity": "Shipperville",
            "shipToState": "OR",
            "shipToPostal": "67890",
            "shipToCountry": "US",
            "shipToPhone": "5033335678"
        }
    },
    "uiOptions": {
        "displaySubmitButton": true,
        "useLegacyIframe": false,
        "hideCvc": false,
        "requireCvc": true,
        "hideBilling": false,
        "forceExpirationSelection": true
    }
};

function getOneTimeUseFunction() {
    return fetch('https://api.nexiopaysandbox.com/pay/v3/token', {
        method: 'post',
        body: JSON.stringify(otuRequest),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic eW91clVzZXJOYW1lOnlvdXJQYXNzd29yZA=='
        }
    }).then((res) => {
        console.log('------->res', res);
        return res.json();
    })
};
