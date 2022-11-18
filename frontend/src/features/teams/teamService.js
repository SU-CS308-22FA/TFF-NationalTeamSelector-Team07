import axios from 'axios'

// const API_URL = '/api/teams/'

// create new team
const createTeam = async (teamData, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    console.log('teamservice', teamData)
    const response = await axios.post('/api/teams/', teamData)

    return response.data
}

// get user teams
const getTeams = async (user, token) => {

    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }

    const response = await axios.get('/api/teams/')

    return response.data
}

// get user team
const getTeam = async (teamId, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }

    const response = await axios.get('/api/teams/' + teamId)

    
    return response.data
}

const teamService = {
    createTeam,
    getTeams,
    getTeam,
}

export default teamService