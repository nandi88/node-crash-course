// router and methods with controller methods referenced.

const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.blog_index);

//create new blog
router.post('/', blogController.blog_create_post);

//put create above ':id' because of '/blog/:id' later on in code thinks that 'create' is an id
//get the page to create a blog
router.get('/create', blogController.blog_create_get); 

//get single blog
router.get('/:id', blogController.blog_details);

//delete blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;