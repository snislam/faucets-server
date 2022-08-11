const mongoose = require('mongoose');

const optionsSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    icon: {
        type: String,
        required: true
    }
})

module.exports = optionsSchema;