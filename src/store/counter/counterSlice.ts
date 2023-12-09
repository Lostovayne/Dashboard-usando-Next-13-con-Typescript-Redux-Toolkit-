import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
    count: 8,
    isReady: false,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        initCounterState(state, action: PayloadAction<number>) {
            if (state.isReady) return;
            state.count = action.payload;
            state.isReady = true;
        },

        addOne(state) {
            state.count++;
        },

        substractOne(state) {
            if (state.count === 0) return;
            state.count--;
        },

        resetCounter(state, action: PayloadAction<number>) {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        },
    },
});

export const { addOne, substractOne, resetCounter, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;
