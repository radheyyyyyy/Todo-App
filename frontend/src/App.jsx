import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateTodo} from "./components/CreateTodo";
import {Todo} from "./components/Todo.jsx"
function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/addtodo" element={<CreateTodo/>} />
                <Route path="/todos" element={<Todo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;