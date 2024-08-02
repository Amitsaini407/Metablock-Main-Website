const Video = require('../models/videoModel');

// Create a new video
exports.createVideo = async (req, res) => {
  try {
    const { url, category_id } = req.body;
    const newVideo = new Video({ url, category_id });
    await newVideo.save();
    res.status(201).json({ status: 'success', data: newVideo });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

// Retrieve all videos
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('category_id');
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

// Retrieve a single video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('category_id');
    if (!video) {
      return res.status(404).json({ status: 'fail', message: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

// Update a video by ID
exports.updateVideoById = async (req, res) => {
  try {
    const { url, category_id } = req.body;
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ status: 'fail', message: 'Video not found' });
    }

    if (url) video.url = url; // Update video URL if provided
    if (category_id) video.category_id = category_id; // Update category if provided

    await video.save();
    res.status(200).json({ status: 'success', data: video });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

// Delete a video by ID
exports.deleteVideoById = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) {
      return res.status(404).json({ status: 'fail', message: 'Video not found' });
    }
    res.status(200).json({ status: 'success', message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

// Get videos by category
exports.getVideosByCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const videos = await Video.find({ category_id }).populate('category_id');
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};
