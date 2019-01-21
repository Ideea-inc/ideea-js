# Ideea JS SDK

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