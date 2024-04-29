import axios from "axios"
import { useEffect, useState } from "react"


export const Balance = ({ value }) => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/account/balance`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
            
        })
            .then(response => {
                setBalance(response.data.balance)
            })
    }, [balance])
    return <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
            <div className="font-bold text-lg px-2">
                Balance
            </div>
            <div className="font-bold text-2xl">
                {balance}
            </div>
        </div>

    </div>

}