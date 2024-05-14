const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async function (req, res) {
  try {

    const { username, email, password } = req.body;

    if (!username)
      return res
        .status(400)
        .send({ status: false, msg: "please provide userName" });

    if (!(email || password))
      return res
        .status(400)
        .send({ status: false, msg: " please provide email or password" });

    const emailVarify = await userModel.findOne({ email: email });

    if (emailVarify)
        return res
          .status(400)
          .send({ status: false, msg: " email is already exist" });
  
      const salt = await bcrypt.genSalt(10);
      encryptedPassword = await bcrypt.hash(password, salt);
  
      const userData = {
        username: username,
        email: email,
        password: encryptedPassword,
      };
  
      const newUser = await userModel.create(userData);
  
      return res.status(201).send({ status: true, msg: newUser });
  
      
    } catch (error) {
      return res
        .status(500)
        .send({ status: false, error: "Internal server error" });
    }
  };
  module.exports = { signUp };