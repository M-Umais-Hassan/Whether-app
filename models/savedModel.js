const mongoose = require('mongoose');

const saveLocationSchema = new mongoose.Schema({
    location: {type: String, required: true},
    userId: {type: String, required: true},
});

module.exports = saveLocation = mongoose.model("saveLocation", saveLocationSchema);