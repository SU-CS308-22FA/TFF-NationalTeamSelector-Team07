/*
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import authService from './authService'
// NOTE: use a extractErrorMessage function to save some repetition


// Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'))

// NOTE: remove isSuccess from state as we can infer from
// presence or absence of user
// There is no need for a reset function as we can do this in our pending cases
// No need for isError or message as we can catch the AsyncThunkAction rejection
// in our component and we will have the error message there
const initialState = {
  user: user ? user : null,
  isLoading: false,
}

// register new user
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkAPI) => {
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


// Logout user
// NOTE: here we don't need a thunk as we are not doing anything async so we can
// use a createAction instead
export const logout = createAction('auth/logout', () => {
  authService.logout()
  // return an empty object as our payload as we don't need a payload but the
  // prepare function requires a payload return
  return {}
})

// NOTE: in cases of login or register pending or rejected then user will
// already be null so no need to set to null in these cases

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
    },
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
  },
})

export default authSlice.reducer
 */

import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import authService from './authService'

// get user from localStorage

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
}
 // register new user
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkAPI) => {
      //console.log(user)
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

// login a admin
export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin', 
  async (user, thunkAPI) => {
      try{
          return await authService.loginAdmin(user)
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
export const update = createAsyncThunk(
  'auth/update', 
  async (user, thunkAPI) => {
      try{
          return await authService.update(user)
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

// delete a user
export const deleteUser = createAsyncThunk(
  'auth/deleteUser', 
  async (user, thunkAPI) => {
    console.log('authslice user ' + user)
      try{
          return await authService.deleteUser(user)
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
        logout: (state) => {
            state.user = null
        },
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
          .addCase(loginAdmin.pending, (state) => {
            state.isLoading = false
          })
          .addCase(loginAdmin.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(loginAdmin.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(update.pending, (state) => {
            state.isLoading = false
          })
          .addCase(update.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(update.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(deleteUser.pending, (state) => {
            state.isLoading = false
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(deleteUser.rejected, (state) => {
            state.isLoading = false
          })
    }

})
export const {reset} = authSlice.actions
export default authSlice.reducer
