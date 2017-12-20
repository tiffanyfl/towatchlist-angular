const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// ToWatch Schema
const FilmSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Film = module.exports = mongoose.model('Film', FilmSchema);

/*module.exports.getTWById = function(id, callback){

}

module.exports.addToWatch = function(newTW, callback){

}*/

module.exports.getFilmById = function(id, callback){
    Film.findById(id, callback);
}
/*module.exports.addToWatch;*/

module.exports.addFilm = function(newFilm, callback){
  newFilm.save(callback());
}

module.exports.getFilmByName = function(name, callback){
    const query = {name: name}
    Film.findOne(query, callback);
}


module.exports.getFilms = function(){
    Film.find();
}
