import { useState } from "react";


function ToDoForm(props) {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        props.addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                type="text"
                placeholder="Add Todo..."
                onChange={(event) => setValue(event.target.value)}
            />
        </form>
    );
    
}

export default ToDoForm