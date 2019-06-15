const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroeSchema = new Schema({
    name: {type:String, required:true},
    picture: {type:String, required:true},
    publisher: {type:String, required:true},
    info: {type:String, required:true}
});

module.exports = mongoose.model('heroe',heroeSchema);