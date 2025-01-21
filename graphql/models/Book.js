const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  isbn: { type: String, unique: true, required: true },
  copiesAvailable: { type: Number, required: true },
  totalCopies: { type: Number, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt
    
module.exports = mongoose.model('Book', bookSchema);