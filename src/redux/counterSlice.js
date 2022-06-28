import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

  // 名前と初期値
  name: "counter",
  initialState: {
    value: 0,
  },
  
  // 裏側の仕組み
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // reset: (state) => {
    //   state.value = 0
    // }
  }
})

// reducersで記述したアクションをエクスポートする
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
