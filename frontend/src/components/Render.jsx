import axios from "axios";

export function Render({title,description,id}){
    return(
        <div className='bg-white border-2 border-black mb-2 w-[40%] h-36 col-span-1 rounded'>
            <div className='font-bold font-sans text-2xl p-1 ml-6'>{title}</div>
            <div className='font-semibold font-serif p-1 ml-6'>{description}</div>
            <div className='p-3'><button className='rounded bg-violet-500 p-1 text-white hover:p-2 border-2 border-purple-900' onClick={ async ()=>{
                const res=await axios.post('http://localhost:5000/mark',{
                id
                })
                alert(res.data)
            }}>Mark as Done</button>
        </div>
        </div>
    )
}