import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'var(--red-dark)' : 'var( --green-dark)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'var(--red-dark)' : 'var( --green-dark)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: var(--backgroundColor);
        border: 1px solid var(--grey-200);
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History