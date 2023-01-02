import axios from 'axios'

// create comment
const createComment = async (userData) => {
    const response = await axios.post('/api/comments/', userData)
    console.log(response.data)
    return response.data
}

const commentService = {
    createComment,
}

export default commentService