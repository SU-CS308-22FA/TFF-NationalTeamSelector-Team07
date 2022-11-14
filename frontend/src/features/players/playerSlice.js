
// export const createPlayer =  createAction('auth/player', async (playerData) => {
//     const response = await axios.post('/api/players/', playerData)
  
//       if(response.data) {
//           localStorage.setItem('player', JSON.stringify(response.data))
//       }
  
//       return response.data
//   })

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import playerService from './playerService'


const initialState = {
    players: [],
    player: null,
}

 // create new team
 export const createPlayer = createAsyncThunk(
    'players/create', 
    async (playerData, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await playerService.createPlayer(playerData, token)
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
 export const getPlayers = createAsyncThunk(
    'player/getPlayers', 
    async (_, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await playerService.getPlayers(token)
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
export const getPlayer = createAsyncThunk(
    'players/get', 
    async (playerId, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await playerService.getPlayer(playerId, token)
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

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createPlayer.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createPlayer.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createPlayer.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getPlayers.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPlayers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.players = action.payload
        })
        .addCase(getPlayers.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getPlayer.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPlayer.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.players = action.payload
        })
        .addCase(getPlayer.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})


export const {reset} = playerSlice.actions
export default playerSlice.reducer