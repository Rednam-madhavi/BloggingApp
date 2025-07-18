import express from 'express';
import {
    createPost, getAllPosts, getPostById, updatePost, deletePost
} from '../controllers/post.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;
