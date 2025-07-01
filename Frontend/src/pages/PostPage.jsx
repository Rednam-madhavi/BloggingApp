import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/Post/PostContent';
import CommentList from '../components/Comment/CommentList';
import CommentForm from '../components/Comment/CommentForm';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { fetchPostById } from '../services/posts';
import { fetchCommentsByPostId } from '../services/comments';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPostData = async () => {
            try {
                const [postData, commentsData] = await Promise.all([
                    fetchPostById(id),
                    fetchCommentsByPostId(id),
                ]);
                setPost(postData);
                setComments(commentsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getPostData();
    }, [id]);

    const handleCommentSubmit = (newComment) => {
        setComments([...comments, newComment]);
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;
    if (!post) return <ErrorMessage message="Post not found" />;

    return (
        <div className="container mx-auto px-4 py-8">
            <PostContent post={post} />
            <div className="mt-12 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Comments</h2>
                <CommentForm postId={id} onCommentSubmit={handleCommentSubmit} />
                <CommentList comments={comments} />
            </div>
        </div>
    );
};

export default PostPage;