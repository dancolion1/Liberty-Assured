import { createSlice } from "@reduxjs/toolkit";

const scrollTop = createSlice({
    name: "scrollTop",
    initialState: true,
    reducers: {
        setScrollTop: (state, action) => {
            return action.payload
        }

    }
})

export const { setScrollTop } = scrollTop.actions
export default scrollTop.reducer