import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Appbar = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    return (
        <div>
            <div className="flex justify-between border-b-2 items-center bg-blue-300 h-20">
                <div>
                    <div className="text-xl font-bold h-full">
                        Payment App
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-lg p-4">Hello User</div>
                    
                    <div className="cursor-pointer rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2" onClick={() => {
                        setExpanded(expanded => !expanded);
                    }}>
                        <div className="flex justify-center items-center text-xl">
                            u
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                {expanded? <div className="cursor-pointer text-md mt-1 mr-2" onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/signin');
                }}>logout</div>: null}
            </div>
        </div>
    )
}