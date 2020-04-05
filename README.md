# TableAPI

> API to perform simple CRUD operations .

This is a simple API server that implements a logic required to correct work of TableAPI.

> Deployed: https://pure-tor-37016.herokuapp.com/

## Requirements

To run this server localy you need to have these requirements:

- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/download-center#community)

## Installations

Use following commands to run this API-server localy:

```zsh
git clone https://github.com/WarOnKhoff/TableApi.git
cd TableApi
npm install
npm run start
```

**Note:** Don't forget to start `mongod` for connection to database.

### Data Model

Use data model strucutre for fecth ops (post / patch)

```zsh
const PostSchema = Schema({
	companyName: {
		type: String,
		require: true,
	},
	stack: {
		type: String,
		require: true,
		default: 'React',
	},
	status: {
		type: String,
		require: true,
		default: 'Waiting',
	},
	payRate: {
		type: Number,
	},
	companyRate: {
		type: Number,
	},
	created: {
		type: Date,
		require: true,
		default: Date.now,
	},
})
```

### HTTP

Here's the map of API's HTTP routes:

- `/posts` — routes related to table items.
  - `/` **GET** — retrieve information about all posts.
  - `/` **POST** — create new chat with specified body (check data model for correct request body creation).
  - `/:id` **GET** — retrieve information about specific post.
  - `/:id` **PATCH** — update specific post (check data model for correct request body creation).
  - `/:id` **DELETE** — delete specific post (check data model for correct request body creation).
