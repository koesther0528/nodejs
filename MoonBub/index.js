const http = require('http');

const app = http.createServer(function (req,res) {
//    let url = req.url;
//
//    if (url === '/')
//       url = '/index.html';
//    if (url === '/favicon.com')
//       return res.writeHead(404);
//    res.writeHead(200);
//    res.end(fs.readFileSync(path__dirname + url));
// });

   // res.writeHead(200);
   // console.log(__dirname);
   // res.end("Hello World");
   const http = require('http')
   const fs = require('fs')
   const url = require('url')

   const app = http.createServer(function (req, reqs) {
      let_url = req.url;
      let queryData = url.parse(_url, true).query;
      res.end(queryData.id);
   });
   app.listen(3333);