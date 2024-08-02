


// 3rd time

const Team = require('../models/teamModel'); // Adjust path as per your project structure
const path = require('path');
const fs = require('fs');

// Create a new team member
exports.createTeamMember = async (req, res) => {
  try {
    const newMember = await Team.create({
      image: req.file.filename, // Save the path to the uploaded image
      name: req.body.name,
      position: req.body.position,
      experience: req.body.experience
    });

    res.status(201).json({
      status: 'success',
      data: {
        member: newMember
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find();
    if (teamMembers.length > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          members: teamMembers
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'No team members found'
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndDelete(req.params.id);
    // console.log('Member:', member); // Log the member object

    if (member && member.image) {
      const imagePath = path.join(__dirname, '../public/team/images', member.image);
      console.log('Image path:', imagePath); // Log the image path

      fs.unlinkSync(imagePath);
      res.status(200).json({
        status: 'success',
        message: 'Team member and image deleted successfully'
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Team member not found or no image to delete'
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update a team member
exports.updateTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    if (!member) {
      return res.status(404).json({
        status: 'fail',
        message: 'Team member not found'
      });
    }

    if (req.file) {
      // Delete old image if a new image is uploaded
      if (member.image) {
        const oldImagePath = path.join(__dirname, '../public/team/images', member.image);
        fs.unlinkSync(oldImagePath);
      }
      member.image = req.file.filename; // Update image
    }

    member.name = req.body.name || member.name;
    member.position = req.body.position || member.position;
    member.experience = req.body.experience || member.experience;

    await member.save();

    res.status(200).json({
      status: 'success',
      data: {
        member: member
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }

//   exports.searchTeamMembers = async (req, res) => {
//   try {
//     const { name } = req.query;

//     if (!name) {
//       return res.status(400).json({
//         status: 'fail',
//         message: 'Query parameter "name" is required'
//       });
//     }

//     // Use a case-insensitive search
//     const teamMembers = await Team.find({
//       name: { $regex: new RegExp(name, 'i') }
//     });

//     if (teamMembers.length > 0) {
//       res.status(200).json({
//         status: 'success',
//         data: {
//           members: teamMembers
//         }
//       });
//     } else {
//       res.status(404).json({
//         status: 'fail',
//         message: 'No team members found with the given name'
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       status: 'fail',
//       message: error.message
//     });
//   }
// };

};

exports.searchTeamMembers = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        status: 'fail',
        message: 'Query parameter "name" is required'
      });
    }

    // Use a case-insensitive search
    const teamMembers = await Team.find({
      name: { $regex: new RegExp(name, 'i') }
    });

    if (teamMembers.length > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          members: teamMembers
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'No team members found with the given name'
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};


