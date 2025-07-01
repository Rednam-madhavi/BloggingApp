import api from './api';

export const fetchCommentsByPostId = async (postId) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data;
};

export const createComment = async (commentData) => {
    const response = await api.post('/comments', commentData);
    return response.data;
};