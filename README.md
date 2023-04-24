
# Cipher 

This project is about to signIn , signUp , Update upser details.

## API Reference

#### SIGN IN

```http
  POST /users/signin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` email` | `string` | **Required**. Your Email |
| ` password` | `string` | **Required**. Your Password |


#### SIGN UP

```http
  POST /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|`firstName`|`string`| **Required** . Your First Name|
|`lasttName`|`string`| **Required** . Your last Name|
| ` email` | `string` | **Required**. Your Email |
| ` password` | `string` | **Required**. Your Password |
| ` phoneNumber` | `numbers` | **Optional**. Your Phone Number |



#### Get User

```http
  GET /users/getUser/UserId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update User
```http
  PUT /users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `aboutme`      | `string` | **Optional**. aboutme |
| `linkedin`      | `string` | **Optional**. linkedin id |
| `facebook`      | `string` | **Optional**. facebook |
| `twitter`      | `string` | **Optional**. twitter |
| `github`      | `string` | **Optional**. github |
| `instagram`      | `string` | **Optional**. instagram |
| `website`      | `string` | **Optional**. website |
|`firstName`|`string`| **Optional** . Your First Name|
|`lasttName`|`string`| **Optional** . Your last Name|
| ` email` | `string` | **Optional**. Your Email |
| ` password` | `string` | **Optional**. Your Password |
| ` phoneNumber` | `numbers` | **Optional**. Your Phone Number |




