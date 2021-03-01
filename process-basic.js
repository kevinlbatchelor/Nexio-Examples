const fetch = require('node-fetch');

fetch('https://api.nexiopaysandbox.com/pay/v3/process', {
	method: 'post',
	body: JSON.stringify({
		"tokenex": {
			"token": "125ecc00-a616-4585-9584-f0e0d8666ea9"
		},
		"data": {
			"amount":1.34,
			"currency":"USD",
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
