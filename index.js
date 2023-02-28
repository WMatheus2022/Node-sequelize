const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello, world!"));

app.use('/products', controllers.products);

app.listen(port, () => console.log(`app listening on port ${port}`));
