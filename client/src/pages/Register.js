import React from 'react'
import { useState, } from 'react'
import FormRow from '../components/Formrow';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage'
const initialState = {
    isMember: true,
};







const Register = () => {
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [values, setValues] = useState(initialState);
    
    const { name, email, password  } = inputState;

    const {isMember}=values;


    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const calltoggleMember = () => {
        toggleMember();
    };

    const onSubmit = async (e) => {
        e.preventDefault();
      
        
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please Fill Out All Fields');
        }
        if (isMember) {
            
            
            const loginres = await fetch('/signin-user', {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({

                    email: email,
                    password: password
                }), credentials: 'include'
            });


            const data = loginres.json();

            if (loginres.status === 400 || !data) {
                toast.error("INVALID");
            }
            else {
                toast.success("LOGIN SUCCESSFUL");

                navigate('/dashboard');
            }
        }

        else {
           
            const res = await fetch('/register-user', {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const correctres = await res.json();

            if (correctres.status === 422 || !correctres) {
                toast.error("INVALID");
            }
            else {
                toast.success("VALID");

                calltoggleMember();
            }

        }
        setInputState({
            name: '',
            email: '',
            password: '',
        })

    }







    return (
        <Wrapper>
            <form className='form' onSubmit={onSubmit}>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {!values.isMember && (<FormRow type='text' name={'name'} value={name} handleChange={handleInput('name')}></FormRow>
                )}

                <FormRow type='email' name={'email'} value={email} handleChange={handleInput('email')}></FormRow>
                <FormRow type='password' name={'password'} value={password} handleChange={handleInput('password')}></FormRow>
                <button type='submit' className='btn btn-block'>submit</button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register
