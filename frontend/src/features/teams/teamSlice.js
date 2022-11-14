import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import teamService from './teamService'

const initialState = {
    teams: [],
    team: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

 // create new team
 export const createTeam = createAsyncThunk(
    'teams/create', 
    async (teamData, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.createTeam(teamData, token)
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
 export const getTeams = createAsyncThunk(
    'teams/getAll', 
    async (_, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.getTeams(token)
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
export const getTeam = createAsyncThunk(
    'teams/get', 
    async (teamId, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.getTeam(teamId, token)
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

export const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createTeam.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createTeam.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createTeam.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getTeams.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getTeams.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getTeams.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getTeam.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getTeam.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getTeam.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})


export const {reset} = teamSlice.actions
export default teamSlice.reducer