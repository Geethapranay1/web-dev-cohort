import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="border rounded-lg p-2 px-4 bg-white w-2/6">
            <Heading title="Signin" />
            <InputBox label="Email" placeholder="Enter your email" onChange={(e) => {
                setUsername(e.target.value);
            }}/>
            <InputBox label="Password" placeholder="Enter your password" onChange={(e) => {
                setPassword(e.target.value);
            }}/><br />
            <Button label="Signin" onClick={async () => {
                try {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username,
                        password
                    })
                        localStorage.setItem('token', response.data.token);
                        navigate('/dashboard');
                } catch (error) {
                    alert(error.response.data)
                }
                
                
            }}/>
            <BottomWarning label="Create a account here" buttonText="Signup" to = "/signup"/>
        </div>
        

    </div>

}