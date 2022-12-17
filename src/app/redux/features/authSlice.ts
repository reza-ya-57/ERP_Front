import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AuthSlice {
  roleId: number | null,
  token: string | null,
  refreshToken: string | null,
}

// Define the initial state using that type
const initialState: AuthSlice = {
    roleId: null,
    token: null,
    refreshToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuth: (state) => {
      
    }
  },
})

export const { setAuth } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer