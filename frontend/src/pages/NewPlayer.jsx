import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

function NewPlayer() {
    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.teams
    )

    const [playerPosition, setPlayer] = useState('forvet')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess) {
            
            navigate('/players')
        }

        
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit =(e) => {
        e.preventDefault()
        //dispatch(createTeam({player, teamName}))
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>Create New PLayer</h1>
                <p>Please Fill Out the Form Below</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">player Name</label>
                    <input type="text" 
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    placeholder={name}
                    value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="surname">player Surname</label>
                    <input type="text" 
                    className="form-control"
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder={surname}
                    value={surname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">age</label>
                    <input type="text" 
                    className="form-control"
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={age}
                    value={age}/>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="player">player position</label>
                        <select name="player" 
                        id="player" 
                        value={playerPosition} 
                        onChange={(e) => setPlayer(e.target.value)}>
                            <option value="sağ açık">sağ kanat</option>
                            <option value="sol açık">sol kanat</option>
                            <option value="forvet">forvet</option>
                            <option value="defans">defans</option>
                            <option value="kaleci">kaleci</option>
                        </select>
                    </div>
                   
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </div>
                    
                </form>
            </section>
        </>
    )

}

export default NewPlayer