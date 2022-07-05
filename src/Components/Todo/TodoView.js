import { useSelector, useDispatch } from "react-redux";
import { tambah, kurang } from "./TodoSlite";

const TodoView = () => {
    const dispatch = useDispatch();

    // Mengambil dari Todo
    const totalTodoRedux = useSelector((state) => state.todo.totalTodo);

    console.log("total", totalTodoRedux);

    return (
        <div>
            <h1>Todo</h1>
            <h1>Total Todo: {totalTodoRedux}</h1>

            <button onClick={() => dispatch(tambah())}>Tambah 1</button>
            <button onClick={() => dispatch(kurang())}>kurang 1</button>
        </div>
    );
};

export default TodoView;
