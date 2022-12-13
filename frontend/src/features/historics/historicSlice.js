//historicSlice has been created

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import historicService from './historicService'


const initialState = {
    historics: [],
    historic: [],
}

 // create new team
 export const createHistoric = createAsyncThunk(
    'historics/createHistoric', 
    async (historicData, thunkAPI) => {
        console.log("historicSlice: line 16" )
        try{
            //const token = thunkAPI.getState().auth.user.token
            return await historicService.createHistoric(historicData)
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

 // Get user teams
 export const getHistorics = createAsyncThunk(
    'historics/getHistorics', 
    async (_, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await historicService.getHistorics(token)
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


// Get user team
export const getSpecificHistoric = createAsyncThunk(
    'historics/getHistoric', 
    async (pid, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            //hata var
            return await historicService.getHistoric(pid, token)
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


export const historicSlice = createSlice({
    name: 'historic',
    initialState,
    
    extraReducers: (builder) => {
        builder
        .addCase(createHistoric.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createHistoric.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createHistoric.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getHistorics.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getHistorics.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.historics = action.payload
        })
        .addCase(getHistorics.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getSpecificHistoric.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getSpecificHistoric.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.historics = action.payload
        })
        .addCase(getSpecificHistoric.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
       
    },
})


export const {reset} = historicSlice.actions
export default historicSlice.reducer