# Nexio-Examples
Nexio Payment iFrame Examples. Requires NodJS and NPM. You will need a set of Basic Auth credentials and an Nexio sandbox account.
```npm install```

## How to use Browser Based Encryption

The idea behind browser based encryption is to protect a credit card number by encrypting it before it leaves the user's browser.
In the example file bbe.html you can use JSEncrypt to encrypt string value using a public key. This encrypted credit card number
Can then safely be passed to the Nexio https://api.nexiopaydev.com/pay/v3/process end point to process a credit card.

## How to use a generic iFrame

An iframe is a way to include one webpage in another. Open using-iframe.html in a browser to see how the generic-ifraem.html
is included automatically by the using-iframe.html file. Nexio credit card may be included as iFrames, and provide a simple
way to tokenize a credit card.

## Getting an OTU

A One Time Use token is a sort of instrumentation of data, or preparatory step that is required before a tokenization iFrame can be used. It
is also required before a payment iFrame can be used. Some data is sent to the Nexio servers, and saved for future use. The API then returns
A key which is linked to that data called the One Time Use token. This One Time Use token can be used to load a tokenization iFrame or Payment iFrame.
The data sent when generating the OTU will govern the subsequent iFrame or Payment Form.

- Open otu-basic.js,  update the authorization with your own credentials, save
- run otu-basic.js

```node otubasic.js```

## Tokenizing using an Iframe

To tokenize using and iframe you must be able to first get a one time use token and then use that token to display an
iframe on your shopping cart. 

 - Open otu-basic.js,  update the authorization with your own credentials, save
 - Create a server that can get a one time use token and return it to a html page.
 
 ```node nexio-formbackend.js```
 
 - Create an html page that can ask for a one time use token and load a Nexio iFrame. Open nexio-form-frontend.html in a browser. It connects to
 the node server and ask for an OTU and use it to load an iFrame. <strong>Note the usages of event listener communication</strong>. The Nexio Credit card token is 
 communicated with your page via the event message.
 
 ## Making a payment with a credit card Token
 
 Now that you have tokenized your credit card, you can process a credit card payment.  While processing a card can be done using the Process Credit Card iFrame
 It is best to do by making a serverside POST.
 
 - Open otu-basic.js,  update the authorization with your own credentials, save 
 - Open the process-basic.js file and edit the post body. You will need the Credit Card Token produced in the "Tokenize using iFrame tutorial".
 paste this token into process-basic.js into the tokenex.token field. SAVE
 - Run the file
 
 ```node process-basic.js```
 
 
 

