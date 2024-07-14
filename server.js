import http from "node:http";
import url from "node:url";
import fs from "node:fs";

const server = new http.createServer((req, res) => {
  const baseUrl = 'http://' + req.headers.host + '/';
  const q = new URL(req.url, baseUrl);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let html;

  if (q.pathname.slice(1) == "") {
    html = fs.readFileSync("./src/index.html");
  } else if (q.pathname.slice(1) == "about") {
    html = fs.readFileSync("./src/about.html");
  } else if (q.pathname.slice(1) == "contact-me") {
    html = fs.readFileSync("./src/contact-me.html");
  } else {
    html = fs.readFileSync("./src/404.html");
  }

  res.end(html);
})

server.listen(3000)
