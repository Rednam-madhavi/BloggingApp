import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDarkMode } from '../../hooks/useDarkMode';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { isDarkMode, toggleDarkMode } = useDarkMode(); // ✅ correct destructuring
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    My Blog
                </Link>

                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                        Home
                    </Link>

                    {user ? (
                        <>
                            <Link to="/admin/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                                Dashboard
                            </Link>
                            <button onClick={logout} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/login" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                                Admin Login
                            </Link>
                            <Link to="/signup" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                                Sign Up
                            </Link>
                        </>
                    )}

                    <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                        {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-700 dark:text-gray-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-4">
                    <Link to="/" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>

                    {user ? (
                        <>
                            <Link to="/admin/dashboard" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
                            <button onClick={logout} className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/login" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Admin Login</Link>
                            <Link to="/signup" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Sign Up</Link>
                        </>
                    )}

                    <button onClick={toggleDarkMode} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
