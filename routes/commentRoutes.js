const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/comments', commentController.comment_create_get);

router.post('/comments', commentController.post_comment);

module.exports = router;