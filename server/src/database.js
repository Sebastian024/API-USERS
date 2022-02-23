const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/create-users')
    .then(db => console.log('Db is conected'))
    .catch(err => console.error(err))