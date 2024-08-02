// const express = require('express');
// const galleryController = require('../controllers/galleryController');
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/gallery/images'); // Destination folder for uploads
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + '-' + file.originalname); // File name with unique suffix
//     }
// });

// const upload = multer({ storage: storage });

// const galleryRouter = express.Router();





// galleryRouter.post('/images', upload.single('image'), galleryController.createImage);
// galleryRouter.get('/images', galleryController.getAllImages);
// galleryRouter.get('/images/category/:category_id', galleryController.getImagesByCategory);
// galleryRouter.get('/images/:id', galleryController.getImageById);
// galleryRouter.put('/images/:id', upload.single('image'), galleryController.updateImageById);
// galleryRouter.delete('/images/:id', galleryController.deleteImageById);




// module.exports = galleryRouter;




const express = require('express');
const galleryController = require('../controllers/galleryController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/gallery/images'); // Destination folder for uploads
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // File name with unique suffix
    }
});

const upload = multer({ storage: storage });

const galleryRouter = express.Router();

galleryRouter.post('/images', upload.array('images'), galleryController.createImages); // Use 'array' for multiple uploads
galleryRouter.get('/images', galleryController.getAllImages);
galleryRouter.get('/images/category/:category_id', galleryController.getImagesByCategory);
galleryRouter.get('/images/:id', galleryController.getImageById);
galleryRouter.put('/images/:id', upload.single('image'), galleryController.updateImageById);
galleryRouter.delete('/images/:id', galleryController.deleteImageById);

module.exports = galleryRouter;
