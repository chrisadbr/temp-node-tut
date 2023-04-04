const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to homepage");
  }
  if (req.url === "/about") {
    res.end("This is our brief history");
  }
  res.end(`
  <h1>Opps!</h1>
  <p>401 Page Not Found!</p>
  <a href='/'>back home</a>
  `);
});
server.listen(5000);
