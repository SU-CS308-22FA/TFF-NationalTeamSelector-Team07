import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import authService from './authService'

// get user from localStorage

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '' 
}
 // register new user
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkAPI) => {
      console.log(user)
        try{
            return await authService.register(user)
        }catch (error){
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }

})

// login a user
export const login = createAsyncThunk(
    'auth/login', 
    async (user, thunkAPI) => {
        try{
            return await authService.login(user)
        }catch (error){
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }

}) 


//logout user
export const logout =  createAction('auth/logout', () => {
    authService.logout()

    return {}
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(register.pending, (state) => {
            state.isLoading = true
          })
          .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(register.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(login.pending, (state) => {
            state.isLoading = false
          })
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(login.rejected, (state) => {
            state.isLoading = false
          })
    }

})
export const {reset} = authSlice.actions
export default authSlice.reducer