import { useEffect, useState } from "react";

export function MouseApp() {
    const position = useMousePointer()
    return <div>
        The mouse point is on x : {position.x} and y: {position.y} 
    </div>
}

function useMousePointer() {
    const [position, setPosition] = useState({x:0, y:0})
    const handleClick = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(() => {
        window.addEventListener("mousemove", handleClick)
        return () => {
            window.removeEventListener("mousemove" , handleClick)
        }
    }, [])
    return position
}