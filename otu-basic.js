const fetch = require('node-fetch');

fetch('https://api.nexiopaysandbox.com/pay/v3/token', {
	method: 'post',
	body: JSON.stringify({
		"isAuthOnly": false,
		"card": {
			"cardHolderName": "Rocky Squirrel"
		},
		"data": {
			"amount": 22,
			"currency": "USD",
			"allowedCardTypes": [
				"visa",
				"mastercard",
				"jcb",
				"discover",
				"amex"
			],
			"customer": {
				"invoice": "invoice123",
				"orderNumber": "c3a062b996974f88b25960523018d158",
				"customerRef": "customer123",
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
		"processingOptions": {
			"saveCardToken": true
		},
		"uiOptions": {
			"displaySubmitButton": true,
			"useLegacyIframe": false,
			"hideCvc": false,
			"requireCvc": true,
			"hideBilling": true,
			"forceExpirationSelection": true
		}
	}),
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Basic eW91clVzZXJOYW1lOnlvdXJQYXNzd29yZA=='
	},
}).then((res) => {
	return res.json()
}).then((json) => {
	console.log(json)
});
