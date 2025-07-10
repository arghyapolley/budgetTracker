const mongoose = require("mongoose");

const recurringExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    period: {
        type: String,
        required: true,
        default: "monthly",
        enum: ["monthly", "weekly", "daily", "yearly"]
    }, 
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});

module.exports = mongoose.model("RecurringExpense", recurringExpenseSchema);