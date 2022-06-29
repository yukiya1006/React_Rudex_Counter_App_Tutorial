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
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; //受け取る値が様々ある場合action.payloadを使う
    }
  }
})

// reducersで記述したアクションをエクスポートする
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
