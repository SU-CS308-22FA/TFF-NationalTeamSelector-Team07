import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTeam, reset } from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'

function NewTeam() {
    const { user } = useSelector((state) => state.auth)
    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.teams
    )

    const [player, setPlayerName] = useState()
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [teamName, setTeamName] = useState()
    const [user_id] = useState(user.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess) {
            
            navigate('/teams')
        }

        
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit =(e) => {
        e.preventDefault()
        dispatch(createTeam({player, teamName, email}))
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>Create New Team</h1>
                <p>Please Fill Out the Form Below</p>
            </section>
            <form onSubmit={onSubmit}>
            <section className="form">
            <div className="form-group">
                    <label htmlFor="player">User Name</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={name}
                    value={name} disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">User Email</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={email}
                    value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player Name</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player}
                    value={player} onChange={(e) => setPlayerName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="teamName">Player Team</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={teamName}
                    value={teamName} onChange={(e) => setTeamName(e.target.value)}/>
                </div>
                
                    {/* <div className="form-group">
                        <label htmlFor="player">Player</label>
                        <select name="player" 
                        id="player" 
                        value={player} 
                        onChange={(e) => setPlayer(e.target.value)}>
                            <option value="Ronaldo">Ronaldo</option>
                            <option value="Messi">Messi</option>
                            <option value="Arda Turan">Arda Turan</option>
                            <option value="Sabri">Sabri</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="teamName">Name of your Team</label>
                        <textarea 
                            name="Team Name" 
                            id="Team Name"
                            className='form-control' 
                            placeholder='Team Name' 
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}>

                        </textarea>
                    </div> */}
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </div>
                    </section>
                </form>
            
        </>
    )

}

export default NewTeam