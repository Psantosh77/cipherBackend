const  mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type:Number,
    required:false,
  },
  isEmailVerified: {
    type: Boolean,
    require: false,
  },
  password: {
    type: String,
    required: true,
  },

  aboutme: {
    type: String,
    required: false,
  },

  linkedin: {
    type: String,
    required: false,
  },

  github: {
    type: String,
    required: false,
  },

  facebook: {
    type: String,
    required: false,
  },

  twitter: {
    type: String,
    required: false,
  },

  instagram: {
    type: String,
    required: false,
  },

  website: {
    type: String,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // expires: 3600, // this is the expiry time in seconds
  },
});

module.exports =  mongoose.model("User", userSchema);
