const express = require('express');
const videoController = require('../controllers/videosController');

const videoRouter = express.Router();

// Routes for video operations
videoRouter.post('/videos', videoController.createVideo); // Create a video
videoRouter.get('/videos', videoController.getAllVideos); // Get all videos
videoRouter.get('/videos/category/:category_id', videoController.getVideosByCategory); // Get videos by category
videoRouter.get('/videos/:id', videoController.getVideoById); // Get video by ID
videoRouter.put('/videos/:id', videoController.updateVideoById); // Update video by ID
videoRouter.delete('/videos/:id', videoController.deleteVideoById); // Delete video by ID

module.exports = videoRouter;
