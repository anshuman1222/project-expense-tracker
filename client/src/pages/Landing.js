import React from 'react'

import main from '../assets/images/main.jpg';

import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage'
const Landing = () => {
    return (
        <Wrapper>
            <main>

                <div className="container page">
                    <div className="info">
                        <h1>Expense <span>Tracking</span> App</h1>
                        <p>Helps to keep an accurate record of your money inflow and outflow and take control of your finances by prioritize your spending.</p>
                        <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                    </div>
                    <img src={main} alt="expensegirl" className='img main-img' />
                </div>
            </main>
        </Wrapper>
    )
}

export default Landing
