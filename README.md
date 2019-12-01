<p align="center">
  <img width="192" src="https://ideea.io/static/img/logo-text.svg" alt="Ideea">
</p>

---

### [Ideea.io](https://ideea.io) &nbsp;&nbsp;&nbsp; [Getting Started](https://ideea.io/ideea) &nbsp;&nbsp;&nbsp; [User Guide](https://ideea.io/ideea/user-guide) &nbsp;&nbsp;&nbsp; [Full Documentation](https://ideea.io/docs/ideea) &nbsp;&nbsp;&nbsp;

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

// Get the current user
ideea.user.get().then((user) => {
  console.log(user.id);
  console.log(user.display_name);
})
```


## Methods
This is not a complete list of methods. Please refer to the [full documentation](https://ideea.io/ideea/docs) for the full list of methods.


### .login(email, password, MFA_Token)
This method is used to generate a new access token.

```js
ideea.login('johndoe@gmail.com', 'password', '999 999').then((accessToken) => {
  console.log(accessToken)
})
```


### Ideea.user.get()
To get the current user use the method .getUser()

```js
ideea.user.get().then((user) => {
  console.log(user.email);
  console.log(user.first_name);
  console.log(user.last_name);
})
```

### Ideea.groups.get(groupID)
To a group by ID

```js
ideea.groups.get('00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b').then((group) => {
  console.log(group.id);
  console.log(group.name);
})
```

### Ideea.groups.getUsers(groupID)
Get the users in a specific group

```js
ideea.groups.getUsers('00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b').then((users) => {
  users.map(user => {
    console.log(user)
  })
})
```
