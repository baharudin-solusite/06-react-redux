import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, todo: "hello" },
    { id: 2, todo: "belajar" },
  ]
}


const todoSlice = createSlice({
  name: "Todo",
  initialState,

  // reducers
  reducers: {
    // action borrow
    kurang: (state) => {
      state.totalTodo--;
    },
    tambah: (state) => {
      state.totalTodo += 3;
    },
  },
});

export default todoSlice.reducer;
export const { tambah, kurang } = todoSlice.actions;
