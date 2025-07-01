import PostCard from './PostCard';

const PostList = ({ posts, isAdmin = false, onDelete }) => {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">No posts found</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <PostCard
                    key={post._id}
                    post={post}
                    isAdmin={isAdmin}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default PostList;