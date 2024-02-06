const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("Hello");
  return;
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
