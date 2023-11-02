const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  scores: [{ game: String, score: Number }],
  winStreak: { type: Number, default: 0 }, // Add the winStreak field with a default value of 0
});

const User = mongoose.model('User', userSchema);

module.exports = User;
