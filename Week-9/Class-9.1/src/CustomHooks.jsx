import { useEffect, useState } from "react";
import axios from "axios";

export function AppTodo() {
    // const {todos,loading }= useTodo(5);
    const { isOnline } = useIsOnline();
    



    return <>
    {/* {loading?<h1>Loading...</h1>:<div>
        {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
    </div>} */}
    <div>
        {isOnline?<h1>Online</h1>:<h1>Offline</h1>}
    </div>
    
    </>
}

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        // const value = window.navigator.onLine;
        // console.log(value)
        // value?setIsOnline(true):setIsOnline(false);
        window.addEventListener("online", () => {
            setIsOnline(true);
        })
        window.addEventListener("offline", () => {
            setIsOnline(false);
        })
    }, [isOnline])
    return { isOnline };
}

function useTodo(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const value = setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos")
                .then(response => {
                    setTodos(response.data.todos);
                    setLoading(false);
                })
        },n * 1000)
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(response => {
                setTodos(response.data.todos);
                setLoading(false);
        })
        return () => {
            clearInterval(value);
        }
        
    }, [n])

    return { todos, loading };

}

function Todo({todo}) {
    return <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
    </div>
}
//53:46