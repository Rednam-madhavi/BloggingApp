import { User } from '../models/user.models.js';
import { generateToken } from '../utils/jwt.js';

// @desc    Register a new user (admin)
// @route   POST /api/auth/register
const register = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create admin user
        const user = await User.create({
            username,
            password,
            role: 'admin',
        });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).select('+password');

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({
            _id: user._id,
            username: user.username,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
const getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

export { register, login, getMe };