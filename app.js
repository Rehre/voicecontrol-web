"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public" + "/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening in PORT: ${PORT}`));
