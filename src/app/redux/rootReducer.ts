import { combineReducers } from "@reduxjs/toolkit"

import authSlice from "./features/authSlice"
import counterSlice from "./features/counterSlice"

const rootReducer = combineReducers({
    auth: authSlice,
    counter: counterSlice,
})


export default rootReducer