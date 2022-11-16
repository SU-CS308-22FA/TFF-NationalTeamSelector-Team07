import axios from 'axios'

//const API_URL = '/api/players/'

// create new player
const createPlayer = async (playerData, token) => {
    console.log("playeService")
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }
    console.log(playerData)
    const response = await axios.post('/api/players/', playerData)
    console.log("playeService")
    return response.data
}

// get user teams
const getPlayers = async (token) => {
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }

    const response = await axios.get('/api/players/')

    return response.data
}

// get user team
const getPlayer = async (playerId, token) => {
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }

    const response = await axios.get('/api/players/' + playerId)

    return response.data
}

const playerService = {
    createPlayer,
    getPlayers,
    getPlayer
    // editPlayer,
    // updatePlayer,
    // deletePlayer
}

export default playerService