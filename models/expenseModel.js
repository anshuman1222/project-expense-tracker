const mongoose = require('mongoose')
const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Expense', ExpenseSchema)