import './style.css'

function TodoItem(props) {
    const { todo, completeTodo, index, removeTodo } = props; 
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
            <div>
                <button onClick={() => props.completeTodo(index)}>Complete</button>
            </div>
            <div>
                <button onClick={() => props.removeTodo(index)}>Remove</button>
            </div>
        </div>
    );
}


    export default TodoItem;