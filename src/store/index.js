import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Components/Books/BooksSlice";
import todoReducer from "../Components/Todo/TodoSlite"
import userReducer from "../Components/User/UserSlice";


const store = configureStore({
    reducer: {
        tes: "tes",
        todo: todoReducer,
        book: bookReducer,
        user: userReducer,
    },
});

export default store;
