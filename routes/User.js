const express = require("express");
const router = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth=require('../middleware/passport');


// register

router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, email, password ,phone,adress,specialité,ville,profession,isAdmin} = req.body;
  try {
    const newUser = new user({ name, lastName, email, password ,phone,adress,specialité,ville,profession,isAdmin});

    // check if the email exist

    const searchedUser = await user.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    // hash password

    const saltRounds = 10;

    const genSalt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;

    // save the user
    let result = await newUser.save();

    // generate a token
    const paylaod = {
      _id: result._id,
      name: result.name,
    };
    const token = await jwt.sign(paylaod, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    res.status(200).send({ result: newUser, msg: "user is saved ", token :`bearer ${token}`});
  } catch (error) {
    res.status(500).send("cannot save the user");
  }
});

// update
router.put('/update/:id',async(req,res)=>{

  try {
      let result=await user.updateOne({_id:req.params.id},{$set:req.body})
      res.status(200).send({result:result,msg: `doctor with ${req.params.id} is updated `})
  } catch (error) {
      res.status(400).send({msg:`doctor with ${req.params.id} is not updated `})
  }
})

// delete

router.delete('/delete/:id',async(req,res)=>{
  try {
      let result=await user.deleteOne({_id:req.params.id})
      res.status(200).send({result:result,msg: `doctor with ${req.params.id} is deleted `})
  } catch (error) {
      res.status(400).send({msg:`doctor with ${req.params.id} is not deleted `})
  }
})
// login

router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await user.findOne({ email });
    // if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    // password are equal

    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }

    // cree token
    const paylaod = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(paylaod, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });

    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "cannot get the user" });
  }
});

// get one  
router.get('/getonedoctor/:id',async(req,res)=>{
  try {
      let result=await user.findOne({_id:req.params.id})
      res.status(200).send({result:result,msg: `this is the doctor with this ${req.params.id}`})
  } catch (error) {
      res.status(400).send({msg:`there is no doctor with this  ${req.params.id}`})
  }
})

// get all doctors
router.get('/alldoctors',async(req,res)=>{
  try {
      let result=await user.find({profession:"Doctor"})
      res.status(200).send({result:result,msg: `this is all Doctor `})
  } catch (error) {
      res.status(400).send({msg:`there is 0 doctor`})
  }
})
// get all clients

router.get('/allClients',async(req,res)=>{
  try {
      let result=await user.find({profession:"Client"})
      res.status(200).send({result:result,msg: `this is all client `})
  } catch (error) {
      res.status(400).send({msg:`there is 0 client`})
  }
})

router.get('/current',isAuth(),(req,res)=>{
    res.status(200).send({user:req.user})
})
module.exports = router;
