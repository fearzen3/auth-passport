const jwt = require('jsonwebtoken');
const passport = require('passport')
const Strategy = require('passport-local').Strategy
var util = {};



util.isValidAdmin = function(req, res, next) {
    jwt.verify(req.headers.token, 'rahasia', (err, decoded) => {
        if (decoded) {
            if (decoded.role === 'admin') {
                next()
            } else {
                res.send('you dont have authorize');
            }
        } else {
            res.send(err)
        }
    })
}



util.isValidUserOrAdmin = function(req, res, next) {
    jwt.verify(req.headers.token, 'rahasia', (err, decoded) => {
        if (decoded) {
            if (decoded.role === 'admin') {
                next()
            } else if (decoded.role === 'user') {
              if(decoded.id === req.params.id){
                next()
              }else{
                res.send('your user dont have authorize');
              }
            } else {
                res.send('you dont have authorize');
            }
        } else {
            res.send(err)
        }
    })
}







module.exports = util;
