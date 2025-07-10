const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    // date: {
    //     type: Date,
    //     required: true,
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    period: {
        type: String,
        required: true,
    } // monthly, weekly, daily, yearly
});

module.exports = mongoose.model("Budget", budgetSchema);