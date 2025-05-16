const User = require('../../models/User.model'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid j89j9i or password' });
        }

        const isMatch = user.password==password;
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
    
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'});
        // res.json({ token });

        res.status(200).json({
            message: 'Login successful',
            token:token,
            user: {
                id: user._id,
                fullName:user.fullName,
                username: user.username,
                email: user.email,
                phone: user.phone, 
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = login;
