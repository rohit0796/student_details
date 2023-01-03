const express = require("express")
const router = express.Router()
const schema = require('../server/Models/dbschema')
const mongoose=require('mongoose')
var ObjectId = require('mongodb').ObjectID;
router.post('/submit', (req, res) => {
    //console.log(req.body)
    // const dob = new Date(req.body.dob)
    // console.log(dob)
    const userSchema = new schema({
        name: req.body.name,
        email: req.body.email,
        redgno: req.body.redgno,
        mob: req.body.mob,
        dob: req.body.dob,
        password: req.body.password,
        branch: req.body.branch,
        hobbies: req.body.hobbies,
        gender: req.body.gender,
    })
    userSchema.save()
        .then(data => {
            console.log("saved in db")
            res.json(data)
        }).catch(err => {
            console.log(err)
            res.json(err)
        });
})

router.get('/submit', async (req, res) => {
    const user = await schema.find()
    // console.log(user)
    res.send(user);
})
router.post('/submit/delete', async (req, res) => {
    const id = req.body.id;
    // console.log(id)
    await schema.findByIdAndDelete(id).then(data => {
        console.log("deleted")
    }).catch(err => {
        console.log(err)
    })

})
router.get('/submit/update/:id', async (req, res) => {
    // console.log(req.params.id)
   await schema.findOne({ "_id": new ObjectId(req.params.id) }).then(data=>  res.send(data));
    

})
router.post('/submit/updates:id' , async (req,res) => {
    console.log(req.params.id)
const us ={
         name: req.body.name,
        email: req.body.email,
        redgno: req.body.redgno,
        mob: req.body.mob,
        dob: req.body.dob,
        password: req.body.password,
        branch: req.body.branch,
        hobbies: req.body.hobbies,
        gender: req.body.gender,
}
    await schema.findByIdAndUpdate(req.params.id,us).then(data=> console.log("done"))
})

module.exports = router;     