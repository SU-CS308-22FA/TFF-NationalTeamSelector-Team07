import axios from 'axios'


// const API_URL = '/api/users/'

// register user 
const register = async (userData) => {
    const response = await axios.post('/api/users/', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login user
const login = async (userData) => {
    const response = await axios.post('/api/users/' + 'login' , userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// update user
const update = async (userData) => {
    console.log('authservice id ' + userData)
    const response = await axios.put('/api/users/' + userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    console.log(response.data)
    return response.data
}

// delete user
const deleteUser = async (userData) => {
    console.log('authservice id ' + userData)
    const response = await axios.delete(`/api/users/${userData}`)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout user
const logout = () => localStorage.removeItem('user')



const authService = {
    register,
    logout,
    login,
    update,
    deleteUser,
}

export default authService