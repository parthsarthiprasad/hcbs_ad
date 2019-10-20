const mongoose = require('mongoose')
const querySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('query', querySchema);