export const login = async ({ username, password }) => {
    const user = { username };
    localStorage.setItem('token', 'sample_token');
    return user;
};

export const logout = async () => {
    localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');
    return { username: 'admin' };
};
