import axios from 'axios'

// register user 
const createReport = async (userData) => {
    const response = await axios.post('/api/reportedusers/', userData)

    if(response.data) {
        localStorage.setItem('ruser', JSON.stringify(response.data))
    }
    console.log(response.data)
    return response.data
}

const getrUsers = async (token) => {

    const response = await axios.get('/api/reportedusers/')
    return response.data
}


// delete user
const deleterUser = async (userData) => {
    
    console.log('authservice id delete ' + userData)
    const response = await axios.delete('/api/reportedusers/' + userData)

    if(response.data) {
        localStorage.setItem('ruser', JSON.stringify(response.data))
    }
    
    return response.data
    
    
}


const reportsService = {
    createReport,
    deleterUser,
    getrUsers
}

export default reportsService