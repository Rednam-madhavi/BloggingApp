import CommentItem from './CommentItem';
import { formatDate } from '../../utils/helpers';

const CommentList = ({ comments }) => {
    if (!comments || comments.length === 0) {
        return (
            <div className="text-center py-4">
                <p className="text-gray-600 dark:text-gray-400">No comments yet</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;