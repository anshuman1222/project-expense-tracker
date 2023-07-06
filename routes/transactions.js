const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
const { loginUser, registerUser, userVerification, userLogout }=require('../controllers/user')

const router = require('express').Router()
const authenticate = require('../middleware/authenticate')



router.post('/add-income',addIncome)

router.get('/get-incomes', authenticate ,getIncomes)

router.delete('/delete-income/:id',deleteIncome)


router.post('/add-expense', addExpense)

router.get('/get-expenses', authenticate ,getExpenses)

router.delete('/delete-expense/:id', deleteExpense)


router.post('/register-user',registerUser)

router.post('/signin-user',loginUser)

router.get('/getdata-user',authenticate,userVerification)

router.get('/logout-user',userLogout)


module.exports=router