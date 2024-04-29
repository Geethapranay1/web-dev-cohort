
import React, { useEffect, useState } from "react"

export function DebounceApp() {
    const [input, setInput] = useState();
    const dva = useDebounce(input, 500);

    return <> 
        
        <div>
            Debounced value is {dva}
            <input onChange={(e) => {
            setInput(e.target.value);
            
        }} />
        </div>
    </>

}



function useDebounce(value, seconds) {
    const [newValue, setNewValue] = useState(value);
    useEffect(() => {
        let time = setTimeout(() => {
            setNewValue(value);
            
        }, seconds)
        return () => {
            clearTimeout(time)
        }

    }, [value])
    return newValue;
}

//1:47:00