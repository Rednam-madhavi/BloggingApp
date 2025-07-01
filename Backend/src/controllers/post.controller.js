import { User } from '../models/user.models.js';
import { Post } from '../models/post.models.js';

// @desc    Get all posts
// @route   GET /api/posts
const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.json(posts);
    } catch (err) {
        next(err);
    }
};

// @desc    Get single post
// @route   GET /api/posts/:id
const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(post);
    } catch (err) {
        next(err);
    }
};

// @desc    Create new post
// @route   POST /api/posts
const createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        const post = await Post.create({
            title,
            content,
            author: req.user.id,
        });

        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

// @desc    Update post
// @route   PUT /api/posts/:id
const updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check ownership
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        post.title = title || post.title;
        post.content = content || post.content;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        next(err);
    }
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check ownership
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await post.remove();
        res.json({ message: 'Post removed' });
    } catch (err) {
        next(err);
    }
};

export { getPosts, getPost, createPost, updatePost, deletePost };