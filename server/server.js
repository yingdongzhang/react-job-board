const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/react-job-board'

// create mongo connection
mongoose.connect(DB_URL)
mongoose
    .connection
    .on('connected', function () {
        console.log('mongo db connect success')
    })

// collections User
const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}))

// User.create({     user: 'leon',     age: 28 }, function (err, doc) {     if
// (!err)         console.log(doc)     else         console.log(err) })
// User.remove({     age: 18 }, function (err, doc) {     console.log(doc) })
// User.update({     'user': 'leon' }, {     '$set': {         age: 20     } },
// function (err, doc) {     console.log(doc) }) initialize server app
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

app.get('/data', function (req, res) {
    User
        .findOne({
            'age': 20
        }, function (err, doc) {
            return res.json(doc)
        })
})

app.listen(9093, function () {
    console.log('Node app start at port 9093')
})