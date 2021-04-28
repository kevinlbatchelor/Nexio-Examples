# Nexio-Examples
Nexio Payment iFrame Examples. Requires NodeJS and NPM: https://nodejs.org/en/ You will need a set of Basic Auth credentials, and a Nexio sandbox account. Contact
integrations@cmsonline.com to obtain a set of credentials.

```npm install```

## Using Nexio to Tokenize a Card

Before you run a credit Card transaction, you must get a card token. The easiest and most secure way to do this is to use the Nexio card frame iFrame.
https://docs.nexiopay.com/#create-an-e-commerce-save-card-page. This iframe can be embedded into an existing website and used to Save a card to the Nexio Card Vault provided by Tokenex.


## How to use a generic iFrame

An iframe is a way to include one webpage in another.

- Open using-iframe.html in a browser to see how it includes the content from iframe-content.html.

Nexio provides a similar iFrames for tokenizing credit cards. We manage the iFrame, and securely save credit cards to our database and return a credit card token,
That you can safely save.

## Getting an OTU

A One Time Use token is a sort of instrumentation of data, or preparatory step that is required before a credit card tokenization iFrame can be used. Retrieving 
a One Time Use Token required before a payment or tokenization iFrame can be used. When creating an OTU, preparatory data is sent to the Nexio servers, and saved for future use. The API then returns
A key which is linked to that data called the "One Time Use Token". This One Time Use Token can be used to load a tokenization iFrame or Payment iFrame.
The data sent when generating the OTU will govern the subsequent tokenization iFrame or Payment iFrame.

- Open otu-basic.js,  update the authorization with your own credentials, save
- run otu-basic.js

```node otu-basic.js```

This script will get a One Time Use token from the Nexio servers. It returns an object that includes three properties, expiration, token and fraudUrl. 
The token property is the One Time Use token.

- Append the token to the following url and open it in a browser

```https://api.nexiopaysandbox.com/pay/v3/saveCard?token=APPEND-TOKEN-HERE```

You will notice that a credit card form loads in your browser. This card form is the content for your secure iframe.


## Tokenizing using an Iframe

To tokenize using an iframe you must be able to first get a One Time Use Token and then use that token to display an
iframe on your shopping cart. 

 - Open nexio-form-backend.js,  update the authorization with your own credentials, save
 - Create a server that can get a one time use token and return it to a html page. Use the following file as an example.
 
 ```node nexio-form-backend.js```
 
 - Create an HTML page that can ask for a One Time Use Token from your own server and load a Nexio iFrame. Use the following file as an example.
  
  ```nexio-form-frontend.html```
  
- Open your HTML page (nexio-form.frontend.html) in a browser. Consider using VS Code Live Server. This page connects to your node server and asks for an OTU and use it to load an iFrame.
- Fill out the form and submit the form. (Use the fake card number 4111111111111111)
- Edit the nexio-form-frontend.html and note how the Nexio Credit Card Token sent to your page via the event message. The card token returned to your pages is safe to save in your database.
 
 ## Making a payment with a credit card Token
 
 Now you have tokenized your credit card, you can process a credit card payment.  While processing a card can be done using the Process Credit Card iFrame
 It is best to do by making a serverside POST.
 
 - Open otu-basic.js,  update the authorization with your own credentials, save 
 - Open the process-basic.js file and edit the post body. You will need the Credit Card Token produced in the "Tokenize using iFrame tutorial".
 paste this token into process-basic.js into the tokenex.token field. SAVE
 - Run the file
 
 ```node process-basic.js```
 
 ## Extra Credit How to use Browser Based Encryption
 
 The idea behind browser based encryption is to protect a credit card number by encrypting it before it leaves the user's browser.
 In the example file browser-based-encryption.html you can use JSEncrypt to encrypt string value using a public key. This encrypted credit card number
 Can then safely be passed to the Nexio https://docs.nexiopay.com/#run-card-transaction end point to process a credit card.

 
 ## Useful links
 - Documentation https://docs.nexiopay.com/#run-card-transaction
 - Tester https://tester.nexiopaysandbox.com/