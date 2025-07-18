import express from 'express';
import {
    addComment, getCommentsByPost, deleteComment
} from '../controllers/comment.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/:postId', getCommentsByPost);
router.post('/:postId', auth, addComment);
router.delete('/:id', auth, deleteComment);

export default router;
