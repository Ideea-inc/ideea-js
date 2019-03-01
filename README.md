<p align="center">
  <img width="192" src="https://ideea.io/static/img/logo-text.svg" alt="Ideea">
</p>

---

### [Ideea.io](https://ideea.io) &nbsp;&nbsp;&nbsp; [Getting Started](https://ideea.io/ideea) &nbsp;&nbsp;&nbsp; [Full Documentation](https://ideea.io/docs/ideea) &nbsp;&nbsp;&nbsp; [Cheat Sheet](https://github.com/Ideea-inc/ideea-js/blob/master/docs/cheat-sheet.md) 

---

# Ideea JS SDK
This is the official SDK for the Ideea platform. You can use this SDK to manage users and groups, create API Keys and get billing information.


## Installation
```
$ npm install ideea-js
```

## Getting Started
```js
const Ideea = require('ideea-js')

var ideea = new Ideea('6B1AEBDF03B69CC1FB59BD33162410979213A8FF4CF59CAE54E3436D5535E318')

ideea.login('johndoe@example.com', 'password').then(accessToken => {
  console.log(accessToken)
})
```


## Methods
This is not a complete list of methods. Please refer to the [full documentation](https://ideea.io/ideea/docs) for the full list of methods.


### .login(email, password)
This route is used to generate a new access token.

```js
ideea.login('johndoe@gmail.com', 'password').then((accessToken) => {
  console.log(accessToken)
})
```


### .getUser()
To get the current user use the method .getUser()

```js
ideea.getUser().then((user) => {
  console.log(user.email);
  console.log(user.first_name);
  console.log(user.last_name);
})
```

### .getGroup(groupID)
To a group by ID

```js
ideea.getGroup('00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b').then((group) => {
  console.log(group.id);
  console.log(group.name);
})
```

### .getGroupUsers(groupID)
Get the users in a specific group

```js
ideea.getGroupUsers('00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b').then((users) => {
  users.map(user => {
    console.log(user)
  })
})
```

### .getApiKeys(groupID)
Get all of the API keys associted with a specific group

```js
ideea.getApiKeys('00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b').then((apiKeys) => {
  apiKeys.map(apikey => {
    console.log(apikey)
  })
})
```
