import { formatDate } from '../../utils/helpers';

const CommentItem = ({ comment }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                        {comment.username}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {formatDate(comment.createdAt)}
                    </p>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {comment.comment}
            </p>
        </div>
    );
};

export default CommentItem;