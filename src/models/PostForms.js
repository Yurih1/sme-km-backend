const mongoose = require("mongoose");

const FormsSchema = new mongoose.Schema({
    name: String,
    kilometers: String,
    week: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("PostForms", FormsSchema);