const express = require('express')
const fetch = require('node-fetch');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

	app.use(bodyParser.urlencoded({
			extended: false
		}))

	app.use(bodyParser.json())

	app.use(cors())

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})

	app.get('/', (req, res) => {
		fetch('https://api.nexiopaysandbox.com/pay/v3/token', {
			method: 'post',
			body: JSON.stringify(otuRequest),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic a2JhdGNoZWxvckBjbXNvbmxpbmUuY29tOkJhdHRsZSEyMw=='
			},
		}).then((fetchResponse) => {
			return fetchResponse.json()
		}).then((objData) => {
			console.log(objData)
			res.json(objData)
		});
	})

	app.post('/pay', (req, res) => {
		//get token from req
		//call out to nexiopaysandbox
		//use token to make payment
	})

	const otuRequest = {
		uiOptions:{
			displaySubmitButton: true,
			hideBilling:true
		}
	}
