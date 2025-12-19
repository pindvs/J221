const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');
const crypto = require('crypto');

async function addUser(nickname, password) {
    const db = getDB();
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    await db.collection('users').insertOne({ nickname, password: hashedPassword });
}

async function getUserByNickname(nickname) {
    const db = getDB();
    return await db.collection('users').findOne({ nickname });
}

async function getUserById(id) {
    const db = getDB();
    return await db.collection('users').findOne({ _id: new ObjectId(id) });
}

module.exports = { addUser, getUserByNickname, getUserById };