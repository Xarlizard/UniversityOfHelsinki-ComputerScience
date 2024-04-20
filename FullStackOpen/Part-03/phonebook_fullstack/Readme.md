# Exercise information

Fullstack Open submission for Exercises 3.9 - 3.11 .

Simple fullstack web applicaton for understanding the core concepts of Node, Express, CORS and Fly.io.

## Start the application

To start the application, do the following:

```bash
# Install dependancies
$ npm install
# Start the nodemon-server
$ npm run dev
```

You can then access the nodemon-server on: http://localhost:3001/  (port may be already in use, check terminal when running `npm run dev`).
You can access the deployed Fly.io project at https://phonebook-fullstack-xarlizard.fly.dev/ or deploy it yourself with:

```bash
# Login to Fly.io if you weren't already
$ fly auth login
# Deploy fly.io services
$ fly deploy
```

(you need to have Fly.io installed on your machine)