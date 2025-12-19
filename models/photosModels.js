const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');
const fs = require('fs').promises;

async function getAllPhotos() {
    const db = getDB();
    return await db.collection('photos').find().sort({ uploadedAt: -1 }).toArray();
}

async function getPhotoById(id) {
    const db = getDB();
    return await db.collection('photos').findOne({ _id: new ObjectId(id) });
}

async function addPhoto(filename, tags, userId) {
    const db = getDB();
    await db.collection('photos').insertOne({ path: filename, tags, userId: new ObjectId(userId), uploadedAt: new Date() });
}

async function updatePhoto(id, tags) {
    const db = getDB();
    await db.collection('photos').updateOne(
        { _id: new ObjectId(id) },
        { $set: { tags } }
    );
}

async function deletePhoto(id) {
    const db = getDB();
    const photo = await db.collection('photos').findOne({ _id: new ObjectId(id) });
    if (photo) {
        await fs.unlink('uploads/' + photo.path);
        await db.collection('photos').deleteOne({ _id: new ObjectId(id) });
    }
}

async function searchPhotosByTag(tag) {
    const db = getDB();
    return await db.collection('photos')
        .find({ tags: tag })
        .sort({ uploadedAt: -1 })
        .toArray();
}

module.exports = { getAllPhotos, getPhotoById, addPhoto, updatePhoto, deletePhoto, searchPhotosByTag };
