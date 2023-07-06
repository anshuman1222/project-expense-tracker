import React, { useContext, useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify';

// const BASE_URL = "https://project-e-xpense-tracker.vercel.app/api/";
// const BASE_URL ="/api/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [userData,setUserData]=useState({})
   
    const registerUser=async (user)=>{
        const response = await axios.post('/register-user', user, {
            withCredentials: true, headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
              .catch((err)=>{
                toast.error("INVALID");
                setError(err.response.data.message)
              })
        toast.success("VALID");
        
    }
    const loginUser=async(user)=>{
        const response = await axios.post('/signin-user', user, {
            withCredentials: true, headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
              .catch((err)=>{
                  toast.error("INVALID");
                  setError(err.response.data.message)
              })
        toast.success("VALID");      
    }

    const verifyUser=async(user)=>{
        const response = await axios.get('/getdata-user', {
            withCredentials: true, headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
}})
              .catch((err)=>{
                toast.error("INVALID AUTHORIZATION")
              })
        setUserData(response.data);      

    }
    const logoutUser=async()=>{
        const response = await axios.get('/logout-user',{withCredentials:true,headers:{Accept:"application/json"}})
              .catch((err)=>{
                setError(err.response.data.message)
              })
    }
    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post('/add-income', income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get('/get-incomes', {
            withCredentials: true, headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`/delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        const response = await axios.post('/add-expense', income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get('/get-expenses', {
            withCredentials: true, headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`/delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 5)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            registerUser,
            loginUser,
            verifyUser,
            userData,
            logoutUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
