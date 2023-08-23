import { configureStore } from "@reduxjs/toolkit";
import scrollTop from "./navbar"

const store = configureStore({
    reducer: {
        scrollTop: scrollTop,


    },
})

export default store;