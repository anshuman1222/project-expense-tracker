const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date , user_id } = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
        user_id
    })

    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        if (amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number' })
        }
        await expense.save()


        res.status(200).json({ message: 'Expense Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}


exports.getExpenses = async (req, res) => {
    const user_id = req.rootUser._id.toString();
    try {
        const expenses = await ExpenseSchema.find({user_id}).sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}


exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    ExpenseSchema.findByIdAndDelete(id).then((expense) => {
        res.status(200).json({ message: 'Expense Deleted' })
    }).catch((err) => {
        res.status(500).json({ message: 'Server Error' })
    })
}