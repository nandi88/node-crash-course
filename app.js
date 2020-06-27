//create express function
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//set up express app and invoke express and stor in app const
const app = express();

//connect to mongodb
const bdURI = 'mongodb+srv://netninja:scientist@nodetuts-6iczn.mongodb.net/node-tuts?retryWrites=true&w=majority';

//deprecation warning so add 2nd parameter
mongoose.connect(bdURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

//set up view engine
app.set('view engine', 'ejs');

//middleware on static files
app.use(express.static('public'));
//you can just invoke the function
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    //create new instance of the blog model
    const blog = new Blog({
        title: 'new blog 2',
        snippets: 'about my new blog',
        body: 'lorem ipsum dolarjhvsvhjkfzsshjkfsahksfah fhfghgfhukfghk'
    });

    blog.save()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

app.get('/single-blog', (req, res) => {
    Blog.findById('5ef738b687379e0b94a82867')
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

//listen for get request
//render view
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'about' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
});

//404 must be last
app.use((req, res) => {
    res.status(404).render('404' , { title: '404' });
});
