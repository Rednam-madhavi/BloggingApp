import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export const useDarkModeProvider = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        // Apply class to document element
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save preference
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return {
        darkMode,
        toggleDarkMode,
    };
};