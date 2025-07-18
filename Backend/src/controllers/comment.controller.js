import Comment from '../models/comment.models.js';

const addComment = async (req, res, next) => {
    try {
        const { text } = req.body;
        const comment = await Comment.create({
            text,
            post: req.params.postId,
            author: req.user.id,
        });
        res.status(201).json(comment);
    } catch (err) {
        next(err);
    }
};

const getCommentsByPost = async (req, res, next) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .populate('author', 'username');
        res.json(comments);
    } catch (err) {
        next(err);
    }
};

const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findOneAndDelete({
            _id: req.params.id,
            author: req.user.id,
        });
        if (!comment) return res.status(404).json({ message: 'Comment not found or unauthorized' });
        res.json({ message: 'Comment deleted' });
    } catch (err) {
        next(err);
    }
};

export {
    addComment,
    getCommentsByPost,
    deleteComment
};