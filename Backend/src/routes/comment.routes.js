import express from 'express';
import { getComments, addComment } from '../controllers/comment.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/:postId/comments')
    .get(getComments)
    .post(protect, addComment);

export default router;