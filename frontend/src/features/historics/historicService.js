import axios from 'axios'

//const API_URL = '/api/players/'

// create new player
const createHistoric = async (historicData, token) => {
    console.log("playerService: line 7")
    
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }
    console.log("playerService: line 13")
    console.log("playerService: line 14 " + historicData)
   
    const response = await axios.post('/api/historics/', historicData)
    console.log("historicService: line 18" + JSON.stringify(historicData))
    return response.data
}

// get user teams
const getHistorics = async (token) => {
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }

    const response = await axios.get('/api/historics/')
    console.log(response.data)

    return response.data
}



// get user team
const getSpecificHistoric = async (pid, token) => {
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }

    const response = await axios.get('/api/historics/' + pid)

    return response.data
}



const historicService = {
    createHistoric,
    getHistorics,
    getSpecificHistoric,
   
    
}

export default historicService