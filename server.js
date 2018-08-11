const express = require("express");
const app = express();

const port = 3000;


async function onGetRoot(request, response) {
    response.send("Hello world");
}

app.get("/", onGetRoot);

async function startServer() {
    app.listen(port);
    console.log("Server is up and running.\nOpen http://localhost:3000 to start");
}

startServer();