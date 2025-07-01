import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DarkModeToggle from '../UI/DarkModeToggle';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                            BlogApp
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <DarkModeToggle />
                        {user ? (
                            <>
                                <Link
                                    to="/admin/dashboard"
                                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/admin/login"
                                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2"
                            >
                                Admin Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
