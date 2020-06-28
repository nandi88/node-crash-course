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
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'about' });
});

//blog routes
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
});

app.get('/blogs', (req, res) => {
    // keep in mind that it is an array of blogs
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All blogs', blogs: result });
        })
        .catch(err => console.log(err))
});

//create new blog
app.post('/blogs', (req, res) => {
    //save a new blog document
    const blog = new Blog(req.body);
    blog.save()
        //you then want to redirect back to /blogs
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err));
});

//get single blog
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render('details', { blog: result, title: 'View blog' }))
        .catch(err => console.log(err));
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        //send back json to fron end browser
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err));
});

//404 must be last
app.use((req, res) => {
    res.status(404).render('404' , { title: '404' });
});
