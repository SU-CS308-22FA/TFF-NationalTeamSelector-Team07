import axios from 'axios'

//const API_URL = '/api/players/'

// create new player
const createPlayer = async (playerData, token) => {
    //console.log("playerService: " + playerData)
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }
   
    const response = await axios.post('/api/players/', playerData)
    console.log("playeService")
    return response.data
}

// get user teams
const getPlayers = async (token) => {
    console.log("playerService: line 21")
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }

    const response = await axios.get('/api/players/')
    console.log("playerService: line 29: " + response.data)

    return response.data
}

// get players for homepage
const getPlayersHome = async () => {

    const response = await axios.get('/api/players/')
    console.log(response.data)

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

// delete user
const deletePlayer = async (playerData) => {
    console.log('authservice id delete ' + playerData)
    const response = await axios.delete('/api/players/' + playerData)
    console.log(response.data)

    if(response.data) {
        localStorage.setItem('player', JSON.stringify(response.data))
    }
    
    return response.data
    
}

// update player
const editPlayer = async (playerData) => {
    
    const response = await axios.put('/api/players/' + playerData.id, {fullName: playerData.fullName, team: playerData.team, rating: playerData.raiting, position: playerData.position})

    if(response.data) {
        localStorage.setItem('player', JSON.stringify(response.data))
    }
    console.log(response.data)
    return response.data
}


const playerService = {
    createPlayer,
    getPlayers,
    getPlayer,
    editPlayer,
    // updatePlayer,
    deletePlayer,
    getPlayersHome,
}

export default playerService