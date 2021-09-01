const express = require("express");
const { models } = require("mongoose");
const router = express.Router();
const rdv = require("../models/Rendez-vous");

router.post("/postrdv", async (req, res) => {
  const {  client_name,doc_name,client_id,doc_id,date,approved } = req.body;
  try {
    const newrdv = new rdv({ client_name,doc_name,client_id,doc_id,date,approved });
    let result = await newrdv.save();
    res.status(200).send({ result: result, msg: "rdv posted" });
  } catch (error) {
    res.status(500).send("rdv not posted");
  }
});

// get one rdv
router.get('/:id',async(req,res)=>{
    try {
        let result=await rdv.findOne({_id:req.params.id})
        res.status(200).send({result:result,msg: `this is the rdv with this ${req.params.id}`})
    } catch (error) {
        res.status(400).send({msg:`there is no rdv with this  ${req.params.id}`})
    }
  })

// get all rdv 
  router.get('/',async(req,res)=>{
    try {
        let result=await rdv.find()
        res.status(200).send({result:result,msg: `this is all rdv `})
    } catch (error) {
        res.status(400).send({msg:`there is 0 rdv `})
    }
  })


  // delete

router.delete('/delete/:id',async(req,res)=>{
    try {
        let result=await rdv.deleteOne({_id:req.params.id})
        res.status(200).send({result:result,msg: `rdv with ${req.params.id} is deleted `})
    } catch (error) {
        res.status(400).send({msg:`rdv with ${req.params.id} is not deleted `})
    }
  })

  // delete all 

  router.delete('/delete', async(req,res)=>{
    try {
      let result=await rdv.deleteMany({})
      res.status(200).send({result:result,msg: `all rdv deleted deleted `})
    } catch (error) {
      res.status(400).send({msg:"cant delete all rdv"})
    }
  })

// update
router.put('/update/:id',async(req,res)=>{

    try {
        let result=await rdv.updateOne({_id:req.params.id},{$set:req.body})
        res.status(200).send({result:result,msg: `appointement with docotr with  ${req.params.id} is approved `})
    } catch (error) {
        res.status(400).send({msg:`doctor with ${req.params.id} is not approved `})
    }
  })






module.exports=router
