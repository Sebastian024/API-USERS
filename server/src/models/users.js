const {Schema, model};
mongoose = require('mongoose');




const newUserSchema = new Schema ({
    name: {type: String, required: true} ,
    age: {type: Number, required: true },
    cell_phone: {type: Number, required: true },
    direction: {type: String, required: true },
}, {
    timestamps: true,
    versionkey: false
}) 

module.exports = model ('userNew', newUserSchema)