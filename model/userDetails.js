const mongoose = require("mongoose");

const Profile = mongoose.Schema({
  aboutme: {
    type: String,
    required: true,
  },

  linkedin: {
    type: String,
    required: true,
  },

  github: {
    type: String,
    required: true,
  },

  facebook: {
    type: String,
    required: true,
  },

  Twitter: {
    type: String,
    required: true,
  },

  instagram: {
    type: String,
    required: true,
  },

  website: {
    type: String,
    required: true,
  },

//   hiogestEducation: {
//     type: Enumerator,
//     value: ["Higher Education", "Graduation", "Post Graduation"],
//   },

  createdAt: {
    type: Date,
    default: Date.now,
    // expires: 3600, // this is the expiry time in seconds
  },
});

module.exports = mongoose.model("Profile", Profile);
