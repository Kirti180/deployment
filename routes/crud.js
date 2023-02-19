
const express = require('express')
const crudRouter = express.Router()
const {crudModel} = require('../models/crudModel')
const {auth}=require('../middleware/authan')
crudRouter.use(express.json())
crudRouter.use(auth)
crudRouter.get('/',auth,async(req,res)=>{

    const note= await crudModel.find(req.query)
    res.send({data:note})
})

crudRouter.post('/create',auth,async(req,res)=>{
    // res.send("notes created")
    const note=new crudModel(req.body)
    await note.save()
    res.send({data:'note created'})
})


crudRouter.delete('/delete/:id',auth,async(req,res)=>{
    const noteid=req.params.id
    await crudModel.findByIdAndDelete({_id:noteid})
    res.send("Deleted the note")
})

crudRouter.patch("/update/:id", async (req, res) => {
        let Id = req.params.id
        const payload = req.body
        // console.log(payload)
        try {
    
            const note=await crudModel.findByIdAndUpdate({ _id: Id }, payload)
            console.log(note)
            res.send({msg:"patch req done"})
        } catch (err) {
            console.log(err)
        }
    })
module.exports={crudRouter}