var db = require('../models');
var method = {}
const jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');




method.getAllUser = function(req, res) {

    db.User.findAll()
        .then(data => {
            res.send(data)
        })
}

method.getOneUser = function(req, res) {
    db.User.findById(req.params.id)
        .then(data => {
            res.send(data)
        })
}

method.createUser = (req, res) => {
    db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio
        })
        .then(() => {
            res.send('INSERT SUCCESS!!')
        })
}
method.signUp = (req, res) => {
    db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio,
            role: req.body.role,
            username: req.body.username,
            password: passwordHash.generate(req.body.password)
        })
        .then(() => {
            res.send('SIGNUP SUCCESS!!')
        })
}

method.deleteUser = (req, res) => {
    db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('DELETE SUCCESS!!')
        })
}

method.updateUser = (req, res) => {
    db.User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('UPDATE SUCCESS')
        })
}

method.signIn = (username, password, next) => {
    db.User.findOne({
            where: {
                username: username
            }
        })
        .then((err, data) => {
          if(err){ next(err) }
          if (!data) {
              // console.log('test1');
                next(null,'username not found');
            } else {
                if (passwordHash.verify(password, data.password)) {
                    let token = jwt.sign({username: data.username,role: data.role,id: data.id }, 'rahasia', {expiresIn: '3h'})
                    next(null,{token:token})
                } else {
                  console.log('test2');
                    next(null,{msg:'password tidak cocok'})
                }
            }
        })
}








module.exports = method;
