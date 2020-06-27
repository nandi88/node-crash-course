// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req, res) => {

//   //lodash
//   const num = _.random(0, 20);
//   console.log(num);

//   const greet = _.once(() => {
//     console.log('hello');
//   });

//   greet();

//   //set header content type
//   res.setHeader('Content-Type', 'text/html');

//   //routing
//   let path = './views/';
//   switch(req.url) {
//     case '/':
//       path += 'index.html';
//       res.statusCode = 200;
//       break;
//     case '/about':
//       path += 'about.html';
//       res.statusCode = 200;
//       break;
//     case '/about-me':
//       res.statusCode = 301;
//       res.setHeader('Location', '/about');
//       res.end();
//       break;
//     default:
//       path += '404.html';
//       res.statusCode = 404;
//       break;
//   }

//   //read file to send back data of file as response to browser
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       //add end method too in error block
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });

// });

// server.listen(3000, 'localhost', () => {
//   console.log('listening for requests on port 3000');
// });