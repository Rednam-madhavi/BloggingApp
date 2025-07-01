import { useEffect, useState } from 'react';
import PostList from '../components/Post/PostList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { fetchPosts } from '../services/posts';

const HomePage = () => {
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

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Latest Blog Posts</h1>
            <PostList posts={posts} />
        </div>
    );
};

export default HomePage;