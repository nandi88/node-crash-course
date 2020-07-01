const Comment = require('../models/comment');

const comment_create_get = (req, res) => {
    res.render('comments/comments', { title: 'create new blog' });
}

const post_comment = (req, res) => {
    const comment = new Comment({
        blog_id: 'df12345',
        blog_name: 'This a a blog with comment',
        comment: 'this is a comment 3'
    });
    comment.save()
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err));
};

module.exports = {
    post_comment,
    comment_create_get
}