import {useEffect, useState} from "react";
import axios from "axios";
import {Render} from "./Render.jsx";

export function Todo(){
    const [todos, setTodos]= useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/todos').then((res)=>{
            setTodos(res.data)
        })
    }, []);
    {console.log(todos);}
    return <div className='bg-gray-500 h-screen w-full grid grid-cols-1'>
        {
            todos.map((todo)=>{
                return(<Render title={todo.title} description={todo.description} id={todo._id}></Render>)
            })
        }
    </div>

}