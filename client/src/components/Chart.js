import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    const incomedata = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const { amount } = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            }
        ]
    }

    const expensedata = {
        labels: expenses.map((expense) => {
            const { date } = expense
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const { amount } = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }


    return (
        <ChartStyled >
            <Line data={incomedata} />
            <Line data={expensedata} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    font-family:inherit;
       font-size:inherit;
       box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
       color: rgba(34, 34, 96, 0.9);
        padding: 0.375rem 0.75rem;
       border-radius: var(--borderRadius);
     background: var(--backgroundColor);
          border: 1px solid var(--grey-200);
          
`;

export default Chart