var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    text: String,
}, {timestamps: true});

var Note = mongoose.model("Note", noteSchema);