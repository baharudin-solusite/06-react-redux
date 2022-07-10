import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "../Components/Books/BooksSlice";
// import userReducer from "../Components/User/UserSlice";
import todoReducer from "../Components/Todo/TodoSlice"

const store = configureStore({
    reducer: {
        tes: "tes",
        todo: todoReducer,
        // book: bookReducer,
        // user: userReducer,
    },
});

export default store;
