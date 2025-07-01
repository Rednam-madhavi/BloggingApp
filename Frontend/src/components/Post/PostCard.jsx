import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

const PostCard = ({ post, isAdmin = false, onDelete }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <Link to={`/posts/${post._id}`} className="block">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 mb-2">
                            {post.title}
                        </h2>
                    </Link>
                    {isAdmin && (
                        <div className="flex space-x-2">
                            <Link
                                to={`/admin/edit-post/${post._id}`}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => onDelete(post._id)}
                                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Posted by {post.author} on {formatDate(post.createdAt)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                    {post.content}
                </p>
                <div className="mt-4">
                    <Link
                        to={`/posts/${post._id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;