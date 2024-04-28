# Exercise information

Fullstack Open submission for Exercises 3.21 3.22 .

Simple fullstack web applicaton for understanding the core concepts of Node, MongoDB and Fly.io.

## Start the application

You can access the already deployed Fly.io project backend at https://phonebook-production.fly.dev/api/persons or deploy it yourself with:

```bash
# Login to Fly.io if you weren't already
$ fly auth login
# Deploy fly.io services
$ fly deploy
```

(you need to have Fly.io installed on your machine)
The frontend build is at `dist` directory.

To test the application's frontend + backend locally, do the following:

```bash
# Install dependancies
$ npm install
# Start the nodemon-server
$ npm run dev
```

You can then access the nodemon-server on: http://localhost:3001/  (port may be already in use, check terminal when running `npm run dev`).