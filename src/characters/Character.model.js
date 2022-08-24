const { Schema, model } = require('mongoose');

const CharacterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Character = model('Character', CharacterSchema);
//////////////////////////////////////////////////////////////
module.exports = { Character };
