import { useEffect, useState } from "react";


export function IntervalApp() {

    const [count, setCount] = useState(0);
    useInterval(() => {
        setCount(count => count+1)
    }, 1000)
    return <div>
        Timer is at {count}
    </div>
}
function useInterval(callback, seconds) {
    

    useEffect(() => {
        let int = setInterval(callback, seconds)
        return () => {
            clearInterval(int)
        }
    }, [])
    

}