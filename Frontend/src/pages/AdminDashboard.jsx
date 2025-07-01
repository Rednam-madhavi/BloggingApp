import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/Post/PostList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { fetchPosts } from '../services/posts';

const AdminDashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    const handleDelete = async (postId) => {
        try {
            // Call API to delete post
            await deletePost(postId);
            setPosts(posts.filter(post => post._id !== postId));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
                <Link
                    to="/admin/create-post"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                    Create New Post
                </Link>
            </div>
            <PostList
                posts={posts}
                isAdmin={true}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default AdminDashboard;