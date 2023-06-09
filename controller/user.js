const Joi = require("joi");
const userModel = require("../model/user");

const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      firstName: Joi.string().required(),
    });
    const { error } = schema.validate({
      email: email,
      password: password,
      firstName: firstName,
    });

    if (error)
      return res
        .status(400)
        .json({ status: false, message: error.details[0].message });

    const alreadyExists = await userModel.findOne({ email: email });

    if (alreadyExists) {
      return res
        .status(401)
        .json({ status: false, message: "Already register Please signin" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);

      const user = await userModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
        phoneNumber: phoneNumber,
      });
      return res.status(200).json({
        status: true,
        userId: user._id,
        message: "SignUp successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
    console.log(error);
  }
};

const Signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate({
      email: email,
      password: password,
    });

    if (error)
      return res
        .status(400)
        .json({ status: false, message: error.details[0].message });

    const findUser = await userModel.findOne({ email: email });

  

    if (findUser) {
      const matchPassowrd = await bcrypt.compare(password, findUser.password);
      if (!matchPassowrd)
        return res.status(400).json({
          status: false,
          message: "Please enter correct email or password",
        });
      return res.status(200).json({
        status: true,
        userId: findUser._id,
        message: "Signin successfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Please enter correct email or password",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const {
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
      aboutme,
      linkedin,
      facebook,
      twitter,
      github,
      instagram,
      website,
      highestEducation,
      correntlyDo,
    } = req.body;

    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string(),
      firstName: Joi.string(),
     

      aboutme: Joi.string(),
      linkedin: Joi.string(),
      facebook: Joi.string(),
      twitter: Joi.string(),
      github: Joi.string(),
      instagram: Joi.string(),
      website: Joi.string(),


      highestEducation: Joi.string(),
      correntlyDo:Joi.string(),
    });
    const { error } = schema.validate({
      email: email,
      
      firstName: firstName,
     
      aboutme: aboutme,
      linkedin: linkedin,
      facebook: facebook,
      twitter: twitter,
      github: github,
      instagram: instagram,
      website: website,
      highestEducation:highestEducation,
      correntlyDo: correntlyDo,
    });

    if (error)
      return res
        .status(400)
        .json({ status: false, message: error.details[0].message });
    const updateUser = await userModel.findById({ _id: id });

    if (!updateUser)
      return res.status(404).json({ status: false, message: "User not found" });

    await updateUser.updateOne({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,

      aboutme: aboutme,
      linkedin: linkedin,
      facebook: facebook,
      twitter: twitter,
      github: github,
      instagram: instagram,
      website: website,
      highestEducation: highestEducation,
      correntlyDo: correntlyDo,
    });

    return res
      .status(200)
      .json({ status: true, message: "updated successfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: false, message: "Something went wrong" });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user)
      return res.status(404).json({ status: false, message: "user Not Found" });

    return res.status(200).json({ status: true, message: user });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { Signup, Signin, getUser, update };
