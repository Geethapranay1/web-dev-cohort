import { Users } from "../components/Users"
import { Balance } from "../components/Balance"
import { Appbar } from "../components/Appbar"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


export const Dashboard = () => {
        const navigate = useNavigate();
        const token = localStorage.getItem('token');
        return <div>

                {token ? (
                    <>
                        <Appbar />
                        <div className="m-8">
                            <Balance value={"10,000"} />
                        </div>
                        <Users />
                    </>
                ) : (
                    useEffect(() => { // Fix the syntax error in the useEffect hook
                        navigate('/signin');
                    }, [token]) // Add an empty dependency array
                )}
                
        </div>
}