const { Router } = require ('express')
const router = Router()

const usersControl = require('../controllers/users.controllers.js') 
// CRUD
// CREATE - READ - UPDATE - DELETE 



router.get('/', usersControl.getUsers);
router.post('/', usersControl.createUsers);
router.get('/:id', usersControl.getUser);
router.put('/:id', usersControl.editeUsers);
router.delete('/:id', usersControl.deleteUsers);



module.exports = router