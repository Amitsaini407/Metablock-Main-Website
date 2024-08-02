// const Gallery = require('../models/galleryModel'); // Adjust the path as per your project structure
// const path = require('path');
// const fs = require('fs');

// // Controller methods
// const galleryController = {
//   // Create a new gallery image
//   createImage: async (req, res) => {
//     try {
//       const { category_id } = req.body;
//       const image = req.file.filename;
//       const newImage = new Gallery({ image, category_id });
//       await newImage.save();
//       res.status(201).json(newImage);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   },

//   // Get all gallery images
//   getAllImages: async (req, res) => {
//     try {
//       const images = await Gallery.find().populate('category_id');
//       res.json(images);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   },
  
//   // Get a single gallery image by ID
//   getImageById: async (req, res) => {
//     try {
//       const image = await Gallery.findById(req.params.id).populate('category_id');
//       if (!image) {
//         return res.status(404).json({ error: 'Image not found' });
//       }
//       res.json(image);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   },
  
//   // Update a gallery image by ID
//   updateImageById: async (req, res) => {
//     try {
//       const image = await Gallery.findById(req.params.id);
//       if (!image) {
//         return res.status(404).json({ error: 'Image not found' });
//       }
      
//       if (req.file && req.file.filename) {
//         // Delete old image if a new image is uploaded
//         if (image.image) {
//           const oldImagePath = path.join(__dirname, '../public/gallery/images', image.image);
//           fs.unlinkSync(oldImagePath);
//         }
//         image.image = req.file.filename; // Update image
//       }
      
//       image.category_id = req.body.category_id || image.category_id; // Update category

//       await image.save();
      
//       res.status(200).json({ status: 'success', data: image });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'fail', message: error.message });
//     }
//   },
  
//   // Delete image and category
//   deleteImageById: async (req, res) => {
//     try {
//       const deletedImage = await Gallery.findByIdAndDelete(req.params.id);
      
//       if (deletedImage && deletedImage.image) {
//         const imagePath = path.join(__dirname, '../public/gallery/images', deletedImage.image);
//         fs.unlinkSync(imagePath);
//       }

//       if (!deletedImage) {
//         return res.status(404).json({ status: 'fail', message: 'Image not found' });
//       }
      
//       res.status(200).json({ status: 'success', message: 'Image deleted successfully' });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).json({ status: 'fail', message: err.message });
//     }
//   },
  
//    // Get gallery images by category
//    getImagesByCategory: async (req, res) => {
//     try {
//       const { category_id } = req.params;
//       const images = await Gallery.find({ category_id }).populate('category_id');
//       res.json(images);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   },

// };

// module.exports = galleryController;


const Gallery = require('../models/galleryModel'); // Adjust the path as per your project structure
const path = require('path');
const fs = require('fs');

// Controller methods
const galleryController = {
  // Create new gallery images (multiple)
  createImages: async (req, res) => {
    try {
      
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      const { category_id } = req.body;
      const images = req.files.map(file => ({
        image: file.filename,
        category_id
      }));

      const newImages = await Gallery.insertMany(images);
      res.status(201).json(newImages);
    } catch (err) {
      console.error('Error creating image:', err); // Log the specific error
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get all gallery images
  getAllImages: async (req, res) => {
    try {
      const images = await Gallery.find().populate('category_id');
      res.json(images);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  
  // Get a single gallery image by ID
  getImageById: async (req, res) => {
    try {
      const image = await Gallery.findById(req.params.id).populate('category_id');
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      res.json(image);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  
  // Update a gallery image by ID
  updateImageById: async (req, res) => {
    try {
      const image = await Gallery.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      
      if (req.file && req.file.filename) {
        // Delete old image if a new image is uploaded
        if (image.image) {
          const oldImagePath = path.join(__dirname, '../public/gallery/images', image.image);
          fs.unlinkSync(oldImagePath);
        }
        image.image = req.file.filename; // Update image
      }
      
      image.category_id = req.body.category_id || image.category_id; // Update category
  
      await image.save();
      
      res.status(200).json({ status: 'success', data: image });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'fail', message: error.message });
    }
  },
  
  // Delete image and category
  deleteImageById: async (req, res) => {
    try {
      const deletedImage = await Gallery.findByIdAndDelete(req.params.id);
      
      if (deletedImage && deletedImage.image) {
        const imagePath = path.join(__dirname, '../public/gallery/images', deletedImage.image);
        fs.unlinkSync(imagePath);
      }

      if (!deletedImage) {
        return res.status(404).json({ status: 'fail', message: 'Image not found' });
      }
      
      res.status(200).json({ status: 'success', message: 'Image deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: 'fail', message: err.message });
    }
  },
  
  // Get gallery images by category
  getImagesByCategory: async (req, res) => {
    try {
      const { category_id } = req.params;
      const images = await Gallery.find({ category_id }).populate('category_id');
      res.json(images);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = galleryController;

