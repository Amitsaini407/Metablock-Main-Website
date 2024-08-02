const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  image: String,
  name: String,
  position: String,
  experience: String
});

// Create model from schema
const Team = mongoose.model('TeamMember', teamMemberSchema);

module.exports = Team;