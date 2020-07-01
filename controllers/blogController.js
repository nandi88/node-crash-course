//name functions similar to mdn like blog_index
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/index', { title: 'All blogs', blogs: result });
        })
        .catch(err => console.log(err))
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            res.status(404).render('404', { title: "blog not found" });
        });
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'create new blog' });
}

const blog_create_post = (req, res) => {
    //save a new blog document
    const blog = new Blog(req.body);
    blog.save()
        //you then want to redirect back to /blogs
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err));
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        //send back json to fron end browser
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err));
}

//controller methods
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};