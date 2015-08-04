var mongoose = require('mongoose');
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  id: ObjectId,
  email: String,
  username: String,
  password: String,
  date: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
