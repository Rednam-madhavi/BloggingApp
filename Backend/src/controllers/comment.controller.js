
import { Comment } from '../models/comment.models.js';
import { Post } from '../models/post.models.js';

// @desc    Get comments for a post
// @route   GET /api/posts/:postId/comments
const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .populate('user', 'username')
            .sort('-createdAt');

        res.json(comments);
    } catch (err) {
        next(err);
    }
};

// @desc    Add comment to post
// @route   POST /api/posts/:postId/comments
const addComment = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const comment = await Comment.create({
            content: req.body.content,
            post: req.params.postId,
            user: req.user.id,
        });

        res.status(201).json(comment);
    } catch (err) {
        next(err);
    }
};

export { getComments, addComment };