const mongoose = require('mongoose');

//get something fom mongoose object, so create Schema
const Schema = mongoose.Schema;

//create new instance of Schema object
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    snippets: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps:true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;