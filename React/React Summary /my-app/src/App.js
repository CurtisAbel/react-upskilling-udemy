import React, {useState} from "react";
import Todo from "./components/Todo";
import { deleteFromList } from "./components/helper";

function App() {

const [todos, setTodos] = useState(["learn react", "go to work", "meet up with friends" ]);;

const confirmDeleteHandler = (indexToDelete) => {
  console.log(todos, indexToDelete);
  const todosWithoutItem = deleteFromList(todos, indexToDelete);
  
  setTodos(todosWithoutItem);
}


  return (
    <div>
      <h1>my todos</h1>
      {todos.map((text, index) => <Todo text={text} onConfirm={() => {
        
        confirmDeleteHandler(index)}}  />)}
      
    </div>
  );
}

export default App;
