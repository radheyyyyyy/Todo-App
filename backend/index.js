const express=require("express");
const z=require("zod");
const cors=require("cors");
const {allTodos} = require("./db");
const schema=z.object({
    title:z.string().min(1),
    description:z.string().min(1),
})
const app=express();
app.use(express.json());
app.use(cors());

app.post("/addTodo",async (req,res)=>{
    const todo=req.body;
    if(schema.safeParse(todo).success){
        const tt={
            title:todo.title,
            description:todo.description,
            done:false
        }
        const t=await allTodos.create(tt)
        res.send({message:"Todo added successfully",id:t._id})
    }
    else {
        res.send({message:"Invalid inputs"})
    }
})

app.get("/todos",async (req,res)=>{
    const todo=await allTodos.find({done:false});
    res.send(todo);
})

app.post("/mark",async (req,res)=>{
    const id=req.body.id;
    await allTodos.updateOne({_id:id},{done:true});
    res.send("Marked as completed")
})

app.listen(5000);