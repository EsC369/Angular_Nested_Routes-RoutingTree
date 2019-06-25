const express = require("express");
const app = express();
const port = 5000
app.use(express.static(__dirname + "/frontEnd/dist/frontEnd"));
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/fronEnd/dist/frontEnd/index.html");
});
app.listen(port, () => {
    console.log("Server Running On port:", port);
});