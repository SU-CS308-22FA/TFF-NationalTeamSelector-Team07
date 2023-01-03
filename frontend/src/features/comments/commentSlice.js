import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentsService from './commentService'

export const createComment = createAsyncThunk(
    'comments/createComment', 
    async (commentData, thunkAPI) => {
        try{
            console.log("commentData commentSlice",commentData)
            const token = thunkAPI.getState().auth.user.token
            return await commentsService.createComment(commentData, token)
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

  export const getComments = createAsyncThunk(
    'comments/getComments', 
    async (getComment, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await commentsService.getComments(getComment, token)
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

 export const getAllComments = createAsyncThunk(
    'comments/getAllComments', 
    async (_, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await commentsService.getAllComments(token)
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
  