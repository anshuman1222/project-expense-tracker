import React ,{useEffect} from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../../components/Chart';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../components/History';

const Data = () => {
  const { totalExpenses, totalIncome, getIncomes, getExpenses } = useGlobalContext();

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  return (
    <DataStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {totalExpenses()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History/>
          </div>
        </div>
      </InnerLayout>

    </DataStyled>
  )
}

const DataStyled = styled.div`
 .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 550px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                padding-bottom:2rem;
                .income, .expense{
                    grid-column: span 2;
                    border: 1px solid var(--grey-200);
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    padding: 0.375rem 0.75rem;
                    font-family:inherit;
                    font-size:inherit;
                    color: rgba(34, 34, 96, 0.9);
                    border-radius: var(--borderRadius);
                    background: var(--backgroundColor);
                    p{
                        font-size: 2.5rem;
                        font-weight: 700;
                    }
                    h2{
                      font-size:2.5rem;
                    }
                }

            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`;

export default Data
