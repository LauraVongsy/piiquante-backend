const mongoose = require('mongoose');
const mongooseErrorHandler = require('mongoose-validation-error-message-handler');

//creation du schema mongoose pour les sauces
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true},
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  description: {type: String, required: true},
  mainPepper: {type: String, required: true},
  imageUrl: {type: String, required: true},
  heat: {type: Number, required: true},
  likes: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  usersLiked: {type: [String]},
  usersDisliked: {type: [String]}
});
sauceSchema.plugin(mongooseErrorHandler);

//model qui permet d'inserer des données dans mongoDB selon le schema pour les sauces
module.exports = mongoose.model('Sauce', sauceSchema);
