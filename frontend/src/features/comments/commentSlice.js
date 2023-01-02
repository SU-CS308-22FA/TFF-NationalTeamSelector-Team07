import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentsService from './commentService'

export const createComment = createAsyncThunk(
    'comments/createComment', 
    async (comment, thunkAPI) => {
      console.log(comment)
        try{
            return await commentsService.createComment(comment)
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