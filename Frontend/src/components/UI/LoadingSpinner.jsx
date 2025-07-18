const LoadingSpinner = ({ small = false }) => {
    const sizeClasses = small ? 'h-5 w-5' : 'h-8 w-8';
    const borderClasses = small ? 'border-2' : 'border-4';

    return (
        <div className="flex justify-center items-center">
            <div
                className={`animate-spin rounded-full ${borderClasses} border-blue-500 border-t-transparent ${sizeClasses}`}
            ></div>
        </div>
    );
};

export default LoadingSpinner;