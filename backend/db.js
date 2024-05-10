const mongo = require('mongoose');
const {number, boolean} = require("zod");
if(mongo.connect("mongodb://localhost:27017/todo-app")){
    console.log("MongoDB Connected!");
}

const allTodos=mongo.model('todo-app',{
    title:String,
    description:String,
    done:Boolean
})

module.exports={
    allTodos
}