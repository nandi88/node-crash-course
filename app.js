//create express function
const express = require('express');

//set up express app and invoke express and stor in app const
const app = express();

//set up view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//listen for get request
app.get('/', (req, res) => {
    res.render('index');
});

// app.get('/about', (req, res) => {
//     res.sendfile('./views/about.html', {root: __dirname});
// });

// //redirects 
// app.get('/about-me', (res, req) => {
//     res.redirect('/about');
// });

// //404 must be last because of use()
// //use() method will then check every get handler to check if there is a url that matches
// app.use((req, res) => {
//     res.status(404).sendfile('./views/404.html', {root: __dirname});
// });
