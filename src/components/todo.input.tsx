import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;

}

interface IProps {
    name?: string;
    addNewTodo:(todo: ITodo) => void;
}
const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;
    const [todo, setTodo] = useState("");
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }
    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleClick = () => {
        if (!todo) {
            alert("Please enter a todo item");
            return;
        }
        addNewTodo({
            id: randomInteger(1, 1000000),
            title: todo,
            isComplete: false
        });
        setTodo("");
    }

    return (
        <div style={{ display: 'flex',  gap: 15, marginBottom: 20 }}>
            <input value={todo} type="text" onChange={handleTextChange} /> 
            <button type="button" onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default TodoInput;