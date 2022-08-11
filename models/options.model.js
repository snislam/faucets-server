const mongoose = require("mongoose");
const optionsSchema = require("../schemas/optionsSchema");
const Option = new mongoose.model('Option', optionsSchema);

module.exports = Option;