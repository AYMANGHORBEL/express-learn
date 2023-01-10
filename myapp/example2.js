const express = require("express");
const app = express();
const port = 4000;
app.get("*", function (req, res) {
  res.end("Hello World");
});
app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
app.get("/name/:user_name", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  res.send(
    "<html><body>" +
      "<h1>Hello " +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});
// GET method route
app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});
//
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});
//
app
  .get("/", function (req, res) {
    res.send("GET request to the homepage");
  })
  .post("/", function (req, res) {
    res.send("POST request to the homepage");
  })
  .all("/secret", function (req, res, next) {
    console.log("Accessing the secret section ...");
    next(); // pass control to the next handler
  })
  .use(function (req, res, next) {
    res.status(404).send("Page introuvable !");
  });
//
app.get("/about", function (req, res) {
  res.send("about");
});
//
app.get("/random.text", function (req, res) {
  res.send("random.text");
});
//
app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});
//
app.get("/ab+cd", function (req, res) {
  res.send("ab+cd");
});
//
app.get("/ab*cd", function (req, res) {
  res.send("ab*cd");
});
//
app.get("/ab(cd)?e", function (req, res) {
  res.send("ab(cd)?e");
});
//
app.get(/a/, function (req, res) {
  res.send("/a/");
});
//
app.get(/.*fly$/, function (req, res) {
  res.send("/.*fly$/");
});
// 
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }