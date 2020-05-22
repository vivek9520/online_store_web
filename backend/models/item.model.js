const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    cateName: { type: String, required: true },
    productName: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    description: { type: String, required: true },
    proCount: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    date: { type: Date, required: true },
    filename: { type: String, required: false },

}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
