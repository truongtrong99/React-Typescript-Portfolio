import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;

}

const TodoList = () => {
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const addNewTodo = (todo: ITodo) => {
    setListTodo([...listTodo, todo]);
  }

  const deleteTodo = (id: number) => {
    setListTodo(listTodo.filter(item => item.id !== id));
  }

  return (
    <div style={{width:"60vw" , margin:"50px auto", border:"1px solid #ccc", borderRadius:"10px", padding:"10px"}}>
      <div style={{padding:"10px 0", borderBottomWidth:1 , borderBottomStyle:"solid", borderBottomColor:"#ccc"}}>
        My Todo list:
      </div>
      <br />
      <TodoInput 
        name={"Nguyen Van A"}
        addNewTodo={addNewTodo}
      />
      <TodoData 
        todos={listTodo} 
        owner={"Nguyen Van A"}
        age={18}
        isDeveloper={true}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoList;