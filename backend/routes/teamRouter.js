const express = require('express');
const teamController = require('../controllers/teamController');

const multer = require('multer');

const teamRouter = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/team/images'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // File name with unique suffix
  }
});

const upload = multer({ storage: storage });

// POST /api/v1/team/create - Create a new team member
teamRouter.post('/create', upload.single('image'), teamController.createTeamMember);
teamRouter.get('/getallmembers',  teamController.getAllTeamMembers);
teamRouter.delete('/delete/:id',  teamController.deleteTeamMember);
teamRouter.put('/update/:id', upload.single('image'), teamController.updateTeamMember); // Add update route
// Search team members by name
teamRouter.get('/search', teamController.searchTeamMembers);





module.exports = teamRouter;
