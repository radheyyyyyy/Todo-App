import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function CreateTodo() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return(
        <div className='flex justify-center items-center bg-gray-500 h-screen w-full'>
            <div className='rounded border-2 border-black bg-white w-[30%]'>
                <div className='m-10'>
                <label className='font-bold'>Title</label>
                <input className='w-full border-2 border-gray-500 rounded p-1' type={"text"} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
                <label className='font-bold'>Description</label>
                <input className='w-full border-2 border-gray-500 rounded mb-8 p-1' type={"text"} onChange={(e)=>{
                    setDescription(e.target.value);
                }}/>
                   <Link to={"/todos"}> <button className='bg-black text-white hover:p-4 w-full rounded p-2' onClick={async ()=>{
                        const res=await axios.post('http://localhost:5000/addtodo',{title:title,description:description});
                        alert(res.data.message);
                   }}>Add todo</button></Link>
                </div>

            </div>
        </div>
    )
}