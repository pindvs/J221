const { addUser, getUserByNickname } = require('../models/userModel');

exports.register = async (req, res) => {
    const { nickname, password } = req.body;
    const existingUser = await getUserByNickname(nickname);
    if (existingUser) {
        return res.send('User already exists');
    }
    await addUser(nickname, password);
    res.redirect('/users/login');
};

exports.login = async (req, res) => {
    const { nickname, password } = req.body;
    const crypto = require('crypto');
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const user = await getUserByNickname(nickname);
    if (user && user.password === hashedPassword) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.send('Invalid credentials');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};