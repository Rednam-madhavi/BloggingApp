import User from '../models/user.models.js';
import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = await User.create({ username, email, password });
        const token = generateToken(user._id);

        res.status(201).json({ user: { id: user._id, username, email }, token });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = generateToken(user._id);
        res.json({ user: { id: user._id, username: user.username, email }, token });
    } catch (err) {
        next(err);
    }
};

export { signup, login };
