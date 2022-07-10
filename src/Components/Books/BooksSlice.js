import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBooks: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,

  // reducers
  reducers: {
    // action borrow
    kurang: (state) => {
      state.totalBooks--;
    },
    tambah: (state) => {
      state.totalBooks++;
    },


  },
});

export default bookSlice.reducer;
export const { kurang, tambah } = bookSlice.actions;
