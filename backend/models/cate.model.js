const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cateSchema = new Schema({
    cateName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Cate = mongoose.model('Cate', cateSchema);

module.exports = Cate;
