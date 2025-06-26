import TodoData from "./todo.data";
import TodoInput from "./todo.input";


const TodoList = () => {
  const todos = [
    {
        id: 1,
        title: "Learn React TypeScript",
        isComplete: false
    },
    {
        id: 2,
        title: "Subscribe Youtube HoiDanIT",
        isComplete: true
    },
    {
        id: 3,
        title: "Learn English",
        isComplete: true
    },
] 

  return (
    <div style={{width:"60vw" , margin:"50px auto", border:"1px solid #ccc", borderRadius:"10px", padding:"10px"}}>
      <div style={{padding:"10px 0", borderBottomWidth:1 , borderBottomStyle:"solid", borderBottomColor:"#ccc"}}>
        My Todo list:
      </div>
      <br />
      <TodoInput 
        name={"Nguyen Van A"}
      />
      <TodoData 
        todos={todos} 
        owner={"Nguyen Van A"}
        age={18}
        isDeveloper={true}
      />
    </div>
  );
}

export default TodoList;