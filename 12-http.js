const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page!");
    return;
  }
  if (req.url === "/about") {
    res.end("this is about something");
    return;
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>OOPS!!!</h1>
    <p>It seems that you're looking for something that is not here!</p>
    <a href="/">Back to Home Page</a>`);
  }
});

server.listen(9000);
