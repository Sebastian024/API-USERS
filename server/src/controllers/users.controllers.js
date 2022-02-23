
const usersControl = {}

const Users = require('../models/users')
const Users = require ('../models/users')

usersControl.getUsers = async (req, res) => {
  const Users = await Users.find()
  res.json (Users)
}
usersControl.createUsers = async(req, res) => {
    const newUser = new Users (req.body)
   
    await newUser.save()
    
    res.send({message: 'User Created'})
}
usersControl.getUser = async (req, res) => {
    console.log(req.params)
    Users.findOne({_id: req.params.id})
    res.send ('getting one user')
}
usersControl.editeUsers = async (req, res) => {
    users.findByIdAndUpdate(req.params.id, req.body)
}
usersControl.deleteUsers = async (req, res) => {
   const user = await Users.findByIdAndDelete(req.params.id)
}


module.exports = usersControl;