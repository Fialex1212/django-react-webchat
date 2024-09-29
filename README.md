# WebChat API 1.0V

## Description
A RESTful API for a real-time chat application built with **Django** and **JWT authentication**. This API allows users to sign up, log in, and join chat rooms. Users can create and participate in chat rooms where they can send and receive messages in real time.

## Features
- User registration and authentication using JWT.
- Real-time messaging with WebSocket support.
- Creating and joining chat rooms.
- Viewing active chat rooms and participants.
- Persistent chat history for each room.

---


## Installation

To set up the project locally, follow these steps:

### Clone the repository:
```bash
git clone https://github.com/Fialex1212/django-react-webchat.git
## API Reference

### Register

```http
  POST /api/users/register/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**.  |

#### Query example
```json
{
  "email": "alex1212@gmail.com",
  "username": "alex1212",
  "password": "alex1212"
}
```
#### Response example
```json
{
    "Message": "User created successfully!"
}
```
### Login

```http
  POST /api/users/login/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**.|
| `password`      | `string` | **Required**.|

#### Response example
```json
{
  "email": "alex1212@gmail.com",
  "password": "alex1212"
}
```

### Get access token

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `refresh`      | `string` | **Required**.|

```http
  POST /api/login/refresh/
```

### Get list of todo

```http
  GET /api/users/list
```

#### Response example
```json
[
    {
        "id": "30ad8222-eb4b-43cc-a367-120ccc22fe0a",
        "username": "alex",
        "email": "alex@gmail.com"
    }
]
```
### Update user

```http
  PUT /api/users/user/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. |
| `username` | `string` | **Required**. |

#### Query example
```json
{
    "email": "alex@gmail.com",
    "username": "alex"
},
```

### Delete user

```http
  DELETE /api/users/user/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. |



### Chat Room List
```http
  GET /api/rooms/
```

#### Response example
```json
[
  {
    "id": 1,
    "name": "general",
    "participants": ["alex", "bob"],
    "messages": [
      {
        "sender": "alex",
        "content": "Hello everyone!",
        "timestamp": "2024-09-28T12:30:00Z"
      }
    ]
  }
]
```

### Join or Create a Chat Room

```http
  POST /api/room/<room_name>/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `room_name`      | `string` | **Required**. Room name to join or create. |
## Authors

- [@Aleks Seriakov](https://github.com/Fialex1212)

