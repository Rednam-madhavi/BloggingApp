import { formatDate } from '../../utils/helpers';

const PostContent = ({ post }) => {
    return (
        <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {post.title}
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
                <span>Posted by {post.author}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-line">{post.content}</p>
            </div>
        </article>
    );
};

export default PostContent;