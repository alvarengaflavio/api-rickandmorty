import mongoose from 'mongoose';
const { Schema, model } = mongoose;

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

export const Character = model('Character', CharacterSchema);
