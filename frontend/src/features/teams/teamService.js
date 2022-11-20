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
const getTeams = async (teamData, token) => {
    console.log('teamservice: ' + JSON.stringify(teamData))
    console.log('teamservice222: ' + teamData.user_id)

    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }

    const response = await axios.get('/api/teams/')
    console.log(response.data)

    return response.data
}

// get user team
const getTeam = async (teamId, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    console.log('teamservice: ' + teamId)
    const response = await axios.get('/api/teams/' + teamId)
    console.log(response.data)

    
    return response.data
}


// delete team
const deleteTeam = async (teamData) => {

    const response = await axios.delete('/api/teams/' + teamData)

    if(response.data) {
        localStorage.setItem('team', JSON.stringify(response.data))
    }
    
    return response.data
    
}



const teamService = {
    createTeam,
    getTeams,
    deleteTeam,
    getTeam,
}

export default teamService