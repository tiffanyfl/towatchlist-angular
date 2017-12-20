const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// ToWatch Schema
const ToWatchSchema = mongoose.Schema({
  filmName: {
    type: String,
    required: true
  },
  seen: {
    type: Boolean
  }
})

const ToWatch = module.exports = mongoose.model('ToWatch', ToWatchSchema);

/*module.exports.getTWById = function(id, callback){

}

module.exports.addToWatch = function(newTW, callback){

}*/

module.exports.getTWById = function(id, callback){
    ToWatch.findById(id, callback);
}
/*module.exports.addToWatch;*/

module.exports.addToWatch = function(newTW, callback){
  newTW.save(callback());
}

module.exports.getFilmByName = function(filmName, callback){
    const query = {filmName: filmName}
    ToWatch.findOne(query, callback);
}

module.exports.getList = function(){
    ToWatch.find();
}
