import axios from 'axios'

const API_URL = '/api/players/'

// create new team
const createPlayer = async (playerData, token) => {
    const config = {
        headers: {
            Authorization: `Esra ${token}`
        }
    }

    const response = await axios.post('/api/players/', playerData)

    return response.data
}

// get user teams
const getPlayers = async (token) => {
    const config = {
        headers: {
            Authorization: `Esra ${token}`
        }
    }

    const response = await axios.get('/api/players/')

    return response.data
}

// get user team
const getPlayer = async (playerId, token) => {
    const config = {
        headers: {
            Authorization: `Esra ${token}`
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