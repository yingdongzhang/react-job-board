const express = require('express')
const utility = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})

Router.post('/register', function (req, res) {
    const {username, password, type} = req.body
    User.findOne({username: username}, function (err, doc) {
        if (doc) {
            return res.json({code: 1, msg: 'user already exists'})
        }
        User.create({username, type, password: salt(password)}, function (e, d) {
            if (e) {
                return res.json({code: 1, msg: `Error creating user ${e}}`})
            }
            return res.json({code: 0})
        })
    })
})

Router.post('/login', function (req, res) {
    const {username, password} = req.body
    // hiding password from returned data
    User.findOne({username: username, password:salt(password)}, {password: 0}, function (err, doc) {
        if (doc) {
            return res.json({code: 0, data: doc})
        }
        if (err) {
            return res.json({code: 1, msg: `Error creating user ${err}}`})
        }
        return res.json({code: 404, msg: `User ${username} not found}`})
    })
})

Router.get('/info', function (req, res) {
    return res.json({
        code: 1
    })
})

function salt(password) {
    const salt = 'this_is_my_salt_35821dsX#@~~fhw'
    return utility.md5(utility.md5(password+salt))
}

module.exports = Router
