const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    blog_id: {
        type: String
    },
    blog_name: {
        type: String
    },
    comment: {
        type: String
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
