//create express function
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//set up express app and invoke express and stor in app const
const app = express();
app.listen(3000)
// //connect to mongodb
const bdURI = 'mongodb+srv://netninja:scientist@nodetuts-6iczn.mongodb.net/node-tuts?retryWrites=true&w=majority';

// //deprecation warning so add 2nd parameter
mongoose.connect(bdURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(8080))
    .catch(err => console.log(err));

//set up view engine
app.set('view engine', 'ejs');

//middleware on static files
app.use(express.static('public'));
//you can just invoke the function
app.use(morgan('dev'));

//listen for get request
//render view
app.get('/', (req, res) => {
    res.redirect('/blogs');
    //res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'about' });
});

//blog routes
app.get('/blogs', (req, res) => {
    // keep in mind that it is an array of blogs
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All blogs', blogs: result });
        })
        .catch(err => console.log(err))
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
});

//404 must be last
app.use((req, res) => {
    res.status(404).render('404' , { title: '404' });
});
