const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const collectionSchema = new Schema({
  colTitle: String,
  //games: [ { type: Schema.Types.ObjectId, ref: 'Game' } ],
  games: Array, // test sans référence de jeu
  creatorId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Collection = mongoose.model('Collection', collectionSchema);
module.exports = Collection;