
const usersControl = {}

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
usersControl.getUser = (req, res) => {
    console.log(req.params)
    Users.findOne({_id: req.params.id})
    res.send ('getting one user')
}
usersControl.editeUsers = (req, res) => {

}
usersControl.deleteUsers = (req, res) => {

}


module.exports = usersControl;