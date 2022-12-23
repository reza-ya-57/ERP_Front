import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { current } from '@reduxjs/toolkit'
import { post } from '../../axios/utility/post'


// Define a type for the slice state
interface AuthSlice {
  roleId: number | null,
  token: string | null,
  refreshToken: string | null,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
}

// Define the initial state using that type
const initialState: AuthSlice = {
    roleId: null,
    token: null,
    refreshToken: null,
    loading: 'idle',
}

interface UserCredential {
    email: string,
    password: string,
}

// First, create the thunk
export const getToken = createAsyncThunk(
    'auth/getToken',
    async (userCredential: UserCredential , thunkAPI) => {
        console.log('in the thunk')
      const response = await post('/api/token/' , userCredential)
      return response
    }
  )

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    testAction: (state , action) => {

    }
  },
extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getToken.fulfilled, (state, action) => {
        // Add user credential to state
        state.token = action.payload.access
        state.refreshToken = action.payload.refresh
        sessionStorage.setItem('access' , action.payload.access)
        sessionStorage.setItem('refresh' , action.payload.refresh)
    })
    },
})

export const { testAction } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer