const fetch = require('node-fetch');
let otuRequest = {}

fetch('https://api.nexiopaysandbox.com/pay/v3/token', {
			method: 'post',
			body: JSON.stringify(otuRequest),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic a2JhdGNoZWxvckBjbXNvbmxpbmUuY29tOkJhdHRsZSEyMw=='
			},
		}).then((res)=>{
			return res.json()
		}).then((data)=>{
			console.log(data)
		})