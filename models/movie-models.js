const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: [1, "At least one character is required"]
    },
    year: {
        type: Number,
        required: true,
        maxlength: 50,
        minlength: [4, "At least one character is required"]
    },
    rating: {
        type: Number,
        maxlength: 10,
        minlength: [1, "At least one character is required"]
    },
    watched: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

module.exports = mongoose.model( "Movie", movieSchema )