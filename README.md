<p align="center">
  <img width="192" src="https://ideea.io/static/img/logo-text.svg" alt="Ideea">
</p>

---

### [Ideea.io](https://ideea.io) &nbsp;&nbsp;&nbsp; [Getting Started](https://ideea.io) &nbsp;&nbsp;&nbsp; [Cheat Sheet](https://github.com/Ideea-inc/ideea-js/blob/master/docs/cheat-sheet.md) &nbsp;&nbsp;&nbsp; [Full Documentation](https://app.ideea.io/scape/docs)

---

# Ideea JS SDK
This is the offical SDK for the Ideea platform.


## Installation
```
$ npm install ideea-js
```

## Getting Started
```js
const Scape = require('scape-js')
const fs = require('fs')


var scape = new Scape('6B1AEBDF03B69CC1FB59BD33162410979213A8FF4CF59CAE54E3436D5535E318')

var image = fs.readFileSync('./image.png')

scape.upload(image, {
	bucket_id: '00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b'
}).then(function (image) {
	console.log(image)
})
```


## Methods

### .login(email, password)
This route is used to generate a new access token.

```
scape.login('johndoe@gmail.com', 'password').then((accessToken) => {
	console.log(accessToken)
})
```


### .getUser()

### .getGroup(groupID)

### .getGroupUsers(groupID)

### .getApiKeys(groupID, apiKey)

### .createApiKey(groupID, apiKey)

### .createEphemeralKey(groupID)

### .createOneTimeUseKey(groupID)
