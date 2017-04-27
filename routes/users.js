var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const util = require('../helpers/util');
const passport = require('passport');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/users/',util.isValidAdmin ,userController.getAllUser)
router.get('/users/:id',util.isValidUserOrAdmin,userController.getOneUser)
router.post('/users/',util.isValidAdmin,userController.createUser)
router.delete('/users/:id',util.isValidAdmin,userController.deleteUser)
router.put('/users/:id',util.isValidUserOrAdmin,userController.updateUser)
router.post('/signup',userController.signUp)
router.post('/signin',passport.authenticate('local',{
  session:false
}),(req,res)=>{
  console.log(req);
  let user = req.user;

  res.send(user)
})



module.exports = router;
