const express = require("express");
const app = express();

const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

async function onGetRoot(request, response) {
    response.render("index");
}

app.get("/", onGetRoot);

async function startServer() {
    app.listen(port);
    console.log("Server is up and running.\nOpen http://localhost:3000 to start");
}

startServer();