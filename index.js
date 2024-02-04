const http = require("http");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(`Method: ${method}, URL: ${url}`);

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Home Page");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is About Page");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Contact Page");
    res.end();
  } else if (url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error writing to file");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("File written successfully");
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});

// Uploading a file using Multer
server.post("/upload", upload.single("file"), (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("File uploaded successfully");
  res.end();
});
