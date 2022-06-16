# Sample Todo Express Mongo API

## Prerequisites

* Install [Node.js](https://nodejs.org/en/download/).
* Install [MongoDB](https://www.mongodb.com/docs/manual/installation/).
* Create `.env.development.local` in root directory of this project and add content to the file follow with `.env.sample`

## Start Project

In the project directory, you can run:

### `npm install`

and then run this script

### `npm run start:dev`

Runs the api in the development mode.\
You can access the api at [http://localhost:3000](http://localhost:3000)

## Routes
All HTTP methods are supported

* Todo
    * `GET`	/todos
    * `GET`	/todos/1
    * `POST`	/todos
    * `PUT`	/todos/1
    * `DELETE`	/todos/1

* User
    * `GET`	/users
    * `GET`	/users/1
    * `POST`	/users
    * `PUT`	/users/1
    * `DELETE`	/users/1

## Dependencies
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)
* [env-cmd](https://www.npmjs.com/package/env-cmd)
* [nodemon](https://www.npmjs.com/package/nodemon)
