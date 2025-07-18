import Post from '../models/post.models.js';

const createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({ title, content, author: req.user.id });
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.json(posts);
    } catch (err) {
        next(err);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id, author: req.user.id },
            { title, content },
            { new: true }
        );
        if (!post) return res.status(404).json({ message: 'Post not found or unauthorized' });
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });
        if (!post) return res.status(404).json({ message: 'Post not found or unauthorized' });
        res.json({ message: 'Post deleted' });
    } catch (err) {
        next(err);
    }
};

export {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
};