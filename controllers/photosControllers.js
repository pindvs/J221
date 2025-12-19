const photosModel = require('../models/photosModels');
const multer = require('multer');
const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });

async function getAll(req, res) {
    const photos = await photosModel.getAllPhotos();
    res.render('pages/index', { photos, user: req.session.user });
}

function getAddForm(req, res) {
    if (!req.session.user) return res.redirect('/users/login');
    res.render('pages/add');
}

const postAdd = [
    upload.single('photo'),
    async (req, res) => {
        if (!req.session.user) return res.redirect('/users/login');
        const tags = req.body.tags ? req.body.tags.split(',').map(t => t.trim()).slice(0, 25) : [];
        await photosModel.addPhoto(req.file.filename, tags, req.session.user._id);
        res.redirect('/');
    }
];

async function getEditForm(req, res) {
    if (!req.session.user) return res.redirect('/users/login');
    const photo = await photosModel.getPhotoById(req.params.id);
    if (!photo || photo.userId.toString() !== req.session.user._id.toString()) return res.send('Not authorized');
    res.render('pages/edit', { photo });
}

async function postEdit(req, res) {
    if (!req.session.user) return res.redirect('/users/login');
    const photo = await photosModel.getPhotoById(req.params.id);
    if (!photo || photo.userId.toString() !== req.session.user._id.toString()) return res.send('Not authorized');
    const tags = req.body.tags ? req.body.tags.split(',').map(t => t.trim()).slice(0, 25) : [];
    await photosModel.updatePhoto(req.params.id, tags);
    res.redirect('/');
}

async function deletePhoto(req, res) {
    if (!req.session.user) return res.redirect('/users/login');
    const photo = await photosModel.getPhotoById(req.params.id);
    if (!photo || photo.userId.toString() !== req.session.user._id.toString()) return res.send('Not authorized');
    await photosModel.deletePhoto(req.params.id);
    res.redirect('/');
}

module.exports = {
    getAll,
    getAddForm,
    postAdd,
    getEditForm,
    postEdit,
    deletePhoto
};
