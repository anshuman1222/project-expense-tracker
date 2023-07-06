import React, { useEffect } from 'react'
import styled from "styled-components";
import { MainLayout } from '../../styles/Layouts';
import Navigation from '../../components/Navigation';
import { useState } from "react";
import {Incomes,Expenses,Data,Logout} from '../dashboard/index'
import { useGlobalContext } from '../../context/globalContext';
import {useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const [active, setActive] = useState(1);
  const { verifyUser,userData} = useGlobalContext()
  const navigate = useNavigate();
  useEffect(() => {
    verifyUser()
    if (!userData) navigate('/register')
  }, [])

  const displayData = () => {
    switch (active) {
      case 1:
        return <Data />
      case 2:
        return <Incomes />
      case 3:
        return <Expenses />  
      case 4:
        return <Logout/>  
      default:
        return <Data />
    }
  }
  return (
    <DashboardStyled className='Dashboard'>
        <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
                   {displayData()}
            </main>
        </MainLayout>
    </DashboardStyled>
  )
}
const DashboardStyled=styled.div`
height:100vh;
position:relative;
main{
    flex: 1;
    background: var(--white);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: var(--borderRadius);
    overflow-x: hidden;
    box-shadow:var(--shadow-2);
    transition:var(--transition);
    :hover{
      box-shadow:var(--shadow-4);
    }
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default Dashboard



