import axios from 'axios'

const API_URL = '/api/teams/'

// create new team
const createTeam = async (teamData, token) => {
    const config = {
        headers: {
            Authorization: `Esra ${token}`
        }
    }

    const response = await axios.post(API_URL, teamData, config)

    return response.data
}

// get user teams
const getTeams = async (token) => {
    const config = {
        headers: {
            Authorization: `Esra ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// get user team
const getTeam = async (teamId, token) => {
    const config = {
        headers: {
            Authorization: `Esra ${token}`
        }
    }

    const response = await axios.get(API_URL + teamId, config)

    return response.data
}

const teamService = {
    createTeam,
    getTeams,
    getTeam,
}

export default teamService