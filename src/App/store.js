import { configureStore } from "@reduxjs/toolkit";
import  CounterSlic  from "../features/Counter/CounterSlice";
export default configureStore({
    reducer:{
        counter:CounterSlic
    }
})