const express = require("express");
const router = express.Router();
const rec=require('../models/Reclamation')

router.post('/postrec',async(req,res)=>{
    const {client_name,client_id,title,object
    }=req.body

    let newrec=new rec({client_name,client_id,title,object})



        try {
            let result=await newrec.save()
            res.status(200).send({result:result,msg:'rec added succesfully'})
        } catch (error) {
            res.status(400).send({msg:'rec is not added'})
            
        }
})




router.get('/getallrec/',async(req,res)=>{
    try {
        let result=await rec.find()
        res.status(200).send({result:result,msg: `this is all rec `})
    } catch (error) {
        res.status(400).send({msg:`there is 0 rec`})
    }
})



router.delete('/deleterec/:id',async(req,res)=>{
    try {
        let result=await rec.deleteOne({_id:req.params.id})
        res.status(200).send({result:result,msg: `rec with ${req.params.id} is deleted `})
    } catch (error) {
        res.status(400).send({msg:`rec with ${req.params.id} is not deleted `})
    }
})





module.exports = router;