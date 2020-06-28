const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/', (req, res) => {
    // keep in mind that it is an array of blogs
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All blogs', blogs: result });
        })
        .catch(err => console.log(err))
});

//create new blog
router.post('/', (req, res) => {
    //save a new blog document
    const blog = new Blog(req.body);
    blog.save()
        //you then want to redirect back to /blogs
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err));
});

//put create above ':id' because of '/blog/:id' later on in code thinks that 'create' is an id
router.get('/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
}); 

//get single blog
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render('details', { blog: result, title: 'View blog' }))
        .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        //send back json to fron end browser
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err));
});

module.exports = router;