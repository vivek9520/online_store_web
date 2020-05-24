const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const StockSchema = new Schema({
    first_namest6: {
        type: String,
        required: true
    },

    last_namest6: {
        type: String,
        required: true
    },

    emailst6: {
        type: String,
        required: true,
        unique: true
    },

    passwordst6: {
        type: String,
        required: true
    },

    positionst6: {
        type: String,
        required: true
    },

    datest6: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});


module.exports = Stock = mongoose.model('stocks', StockSchema)

