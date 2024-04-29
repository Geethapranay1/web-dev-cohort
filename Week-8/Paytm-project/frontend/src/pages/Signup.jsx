import { Button } from '../components/Button';
import { InputBox } from '../components/InputBox';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BottomWarning } from '../components/BottomWarning';

export const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    return <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-100 text-center p-2 h-max px-4'>
            <Heading title={"Sign up"} />
            <Subheading title={"Enter your information to create your account"} />
            <InputBox onChange={(e) => {
                setFirstName(e.target.value);
            }} label={"First Name"} placeholder={"John"} />
            <InputBox onChange={(e) => {
                setLastName(e.target.value);
            }} label={"Last Name"} placeholder={"Doe"} />
            <InputBox onChange={(e) => {
                setUsername(e.target.value);
            }} label={"Email"} placeholder={"Enter your email"} />
            <InputBox onChange={(e) => {
                setPassword(e.target.value);
            }} label={"Password"} placeholder={"Enter your password"} />
            <div className='py-4'>
                <Button onClick={async () => {
                    try {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            password,
                            firstName,
                            lastName
                        })
                        localStorage.setItem('token', response.data.token);
                        navigate('/dashboard');
                    } catch (error) {
                        alert(error.response.data)
                    }
                }}
                 label={"Sign up"}/>
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"} />

            </div>  

        </div>

    </div>
}
