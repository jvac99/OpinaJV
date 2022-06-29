const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Endpoints
app.get("/", (req, res) => {
  res.json({
    message: "oi",
  });
});

app.listen(3333);
