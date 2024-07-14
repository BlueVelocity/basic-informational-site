import http from "node:http";
import fs from "node:fs";

const server = new http.createServer((req, res) => {
  const baseUrl = 'http://' + req.headers.host + '/';
  const q = new URL(req.url, baseUrl);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let html;

  switch (q.pathname.slice(1)) {
    case "": {
      html = fs.readFileSync("./src/index.html");
      break
    };
    case "homepage": {
      html = fs.readFileSync("./src/index.html");
      break
    };
    case "about": {
      html = fs.readFileSync("./src/about.html");
      break
    };
    case "contact-me": {
      html = fs.readFileSync("./src/contact-me.html");
      break
    };
    default: html = fs.readFileSync("./src/404.html");
  }

  res.end(html);
})

server.listen(3000)
