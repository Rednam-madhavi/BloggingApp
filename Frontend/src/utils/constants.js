export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const ROUTES = {
    HOME: '/',
    POST: '/posts/:id',
    ADMIN_LOGIN: '/admin/login',
    ADMIN_DASHBOARD: '/admin/dashboard',
    CREATE_POST: '/admin/create-post',
    EDIT_POST: '/admin/edit-post/:id',
};