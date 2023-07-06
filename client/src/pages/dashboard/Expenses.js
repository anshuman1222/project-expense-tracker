import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import ExpenseForm from '../../components/ExpenseForm';
import ExpenseItem from '../../components/ExpenseItem';
const Expenses = () => {
  const { addExpense, expenses, getExpenses, deleteExpense } = useGlobalContext()
  useEffect(() => {
    getExpenses()
  }, [])
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } = expense;
              return <ExpenseItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteExpense}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
   display: flex;
   overflow: auto;

    .expense-content{
        display: flex;
        gap: 2rem;
        .expenses{
            flex: 1;
        }
    }
    .form-container{
      width:100%;
    }
`;

export default Expenses
