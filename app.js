//create express function
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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
//scope out the /blog and then remove /blog in all routes. It makes it easier if you want to change url later on
app.use('/blogs', blogRoutes);

//404 must be last
app.use((req, res) => {
    res.status(404).render('404' , { title: '404' });
});
