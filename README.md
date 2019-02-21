<p align="center">
  <img width="192" src="https://ideea.io/static/img/logo-text.svg" alt="Ideea">
</p>

---

### [Website](https://ideea.io) &nbsp;&nbsp;&nbsp; [Getting Started](https://ideea.io) &nbsp;&nbsp;&nbsp; [Docs](https://ideea.io/docs/ideea) &nbsp;&nbsp;&nbsp; [Docs](https://app.ideea.io) &nbsp;&nbsp;&nbsp; [Docs](https://app.ideea.io)

---

# Ideea JS SDK
intro


# Installation
```
$ npm install ideea-js
```

Use:
```js
const Scape = require('scape-js')
const fs = require('fs')


var scape = new Scape('6B1AEBDF03B69CC1FB59BD33162410979213A8FF4CF59CAE54E3436D5535E318')

var image = fs.readFileSync('./image.png');

scape.upload(image, {
	bucket_id: '00ce6d6a-ea29-4840-9b5d-cd1f6ae3bc6b'
}).then(function (image) {
	console.log(image)
})
```




## Routes
| SDK Method | HTTP Method | Route | Description | Params (Bold = optional) | Response |
| ------ | ------ | ------ | ------ | ------ | ------ |
| **Auth** |  |  |  |  |  |
| .authCheck() | GET  | /api/v1/auth | Returns {'auth': true} if auth | -- | { 'auth': true } |
| .login(email, password) | POST | /api/v1/auth/login | Login | {email: 'anthonybudd@ideea.co.uk',  password: 'password'} | {access_token} |
| **Groups** |  |  |  |  |  |
| .getGroup(groupID) | GET  | /api/v1/groups/{group_id} | Returns current group | -- | {Group} |
| .updateGroup(groupID, group) | POST | /api/v1/groups/{group_id} | Update group | {**name**: 'Ideea' } | {Group} |
| .getGroupUsers(groupID) | GET  | /api/v1/groups/{group_id}/users | Returns the group's users | -- | [User, User...] |
| .addUserToGroup(groupID, userID, role) | POST | /api/v1/groups/{group_id}/users/add | Add user to group | {user_id: '', role: 'user' } | { 'success': true } |
| .removeUserFromGroup(groupID, userID) | POST | /api/v1/groups/{group_id}/users/remove | Remove user from group | {user_id: '' } | { 'success': true } |
| **Tokens** |  |  |  |  |  |
| .getApiKeys(groupID, apiKey) | GET  | /api/v1/groups/{group_id}/tokens  | Returns the groups tokens | -- | [Token, Token..] |
| .createApiKey(groupID, apiKey) | POST | /api/v1/groups/{group_id}/tokens/create  | Creates a new token | -- | {Token} |
| .createEphemeralKey(groupID) | POST | /api/v1/groups/{group_id}/tokens/create/ephemeral  | Creates a new ephemeral token | -- | {Token} |
| .createOneTimeUseKey(groupID | POST | /api/v1/groups/{group_id}/tokens/create/one-time ) | Creates a new one-time use token | -- | {Token} |
| .deleteApiKey(groupID, apiKeyID) | DEL  | /api/v1/groups/{group_id}/tokens/{token_id}/delete  | Deletes a token | -- | { 'success': true } |
| **User** |  |  |  |  |  |
| .getUser() | GET  | /api/v1/user  | Get the current user | -- | {User} |
| .updateUser(user) | POST | /api/v1/user  | Update the current user | {first_name: 'Ant', last_name: 'B',display_name: 'Anthony.B'} | {User} |