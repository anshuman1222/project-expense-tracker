import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../../components/Button'
import {plus} from '../../utils/Icons'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const { logoutUser } = useGlobalContext()
    const navigate = useNavigate();
    const handleSubmit=()=>{
        logoutUser()
        navigate('/')
    }
  return (
    <LogoutStyled>
      <InnerLayout>
              <h1>Thank you</h1>
              <div className="input-control">
                  <textarea name="description"  placeholder='Please Add Your Valuable Comments' id="description" cols="30" rows="10"></textarea>
              </div>
              <div className="submit-btn">
                  <Button
                      name={'SIGN-OUT'}
                      bPad={'.8rem 1.6rem'}
                      bRad={'30px'}
                      bg={'var(--primary-500'}
                      onClick={handleSubmit}
                      color={'#fff'}
                  /> 
              </div>
      </InnerLayout>
    </LogoutStyled>
  )
}

const LogoutStyled = styled.div`
 display: flex;
   overflow: auto;

    .input-control{
        textarea{
            width: 100%;
        }
    }
    textarea{
        font-family:inherit;
       font-size:inherit;
       box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
       color: rgba(34, 34, 96, 0.9);
        padding: 0.375rem 0.75rem;
       border-radius: var(--borderRadius);
     background: var(--backgroundColor);
          border: 1px solid var(--grey-200);
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Logout
