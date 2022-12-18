const mongoose = require ('mongoose');
const mongooseErrorHandler = require('mongoose-validation-error-message-handler');
const uniqueValidator = require('mongoose-unique-validator');

//Création du schema mongoose pour user
const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseErrorHandler);

//Le model mongoose permet d'insérer nos données dans mongoDB en respectant le userSchema
module.exports = mongoose.model('User', userSchema);
