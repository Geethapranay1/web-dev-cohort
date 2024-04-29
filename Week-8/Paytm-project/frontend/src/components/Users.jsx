import { useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    //debouncing
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.users);
            })
    },[filter])

    return <>
    <div className="font-bold text-lg mt-6">
        Users
    </div>
    <div className="my-2">
        <input type="text" className="border border-slate-200 px-2 py-1 w-full rounded" placeholder="Search users..." onChange={(e) => {
            setFilter(e.target.value);
        }} />

    </div>
    <div>
        
        {users.map((user) => {return <User user1={user}/>})}
        
    </div>
    </>
}
function User({ user1 }) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2">
                <div className="flex justify-center items-center text-xl">
                    {user1.firstName[0]}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    {user1.firstName} {user1.lastName}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button onClick={() => {
                navigate(`/transfer?id=${user1._id}&name=${user1.firstName}`)
            }} label={"Send Money"} />
        </div>
    </div>
}