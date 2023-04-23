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

      await userModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
        phoneNumber: phoneNumber,
      });
      return res
        .status(200)
        .json({ status: true, message: "SignUp successfully" });
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

    console.log("findUser", findUser);

    if (findUser) {
      const matchPassowrd = await bcrypt.compare(password, findUser.password);
      if (!matchPassowrd)
        return res
          .status(400)
          .json({
            status: false,
            message: "Please enter correct email or password",
          });
      return res
        .status(200)
        .json({ status: true, message: "Signin successfully" });
    } else {
      return res
        .status(400)
        .json({
          status: false,
          message: "Please enter correct email or password",
        });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
    console.log(error);
  }
};
module.exports = { Signup, Signin };
