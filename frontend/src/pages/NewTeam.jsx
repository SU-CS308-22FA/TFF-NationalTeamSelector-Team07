import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTeam, reset } from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'
import Dropdown from 'react-dropdown';
import PlayerDropdownItem from '../components/PlayerDropdownItem'

function NewTeam() {
    const { user } = useSelector((state) => state.auth)
    const { players, player } = useSelector((state) => state.players)

    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.teams
    )
    const [playerName] = useState(players.fullName)
    const [playerPosition] = useState(players.position)

    const [player1, setPlayerName1] = useState()
    const [player2, setPlayerName2] = useState()
    const [player3, setPlayerName3] = useState()
    const [player4, setPlayerName4] = useState()
    const [player5, setPlayerName5] = useState()
    const [player6, setPlayerName6] = useState()
    const [player7, setPlayerName7] = useState()
    const [player8, setPlayerName8] = useState()
    const [player9, setPlayerName9] = useState()
    const [player10, setPlayerName10] = useState()
    const [player11, setPlayerName11] = useState()
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [teamName, setTeamName] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onSubmit =(e) => {
        e.preventDefault()
        dispatch(createTeam({player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, teamName, email}))
    }

    // const playerOptions = players.map((player) => (
    //     <PlayerDropdownItem key={player._id} player={player}/>
    // ))

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
                    <label htmlFor="teamName">Player Team</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={teamName}
                    value={teamName} onChange={(e) => setTeamName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player1">Player1 - Goalkeeper</label>
                    {/* <form type="dropdown">
                        <Dropdown options={playerOptions} value={player1} onChange={(e) => setPlayerName1(e.target.value)}  placeholder="Select a goalkeeper" />
                    </form> */}
                     
                    <input type="text" 
                    className="form-control"
                    placeholder={player1}
                    value={player1} onChange={(e) => setPlayerName1(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player2">Player2 - Defender</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player2}
                    value={player2} onChange={(e) => setPlayerName2(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player3">Player3 - Defender</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player3}
                    value={player3} onChange={(e) => setPlayerName3(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player4">Player4 - Defender</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player4}
                    value={player4} onChange={(e) => setPlayerName4(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player5">Player5 - Defender</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player5}
                    value={player5} onChange={(e) => setPlayerName5(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player6 - Midfielder</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player6}
                    value={player6} onChange={(e) => setPlayerName6(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player7 - Midfielder</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player7}
                    value={player7} onChange={(e) => setPlayerName7(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player8 - Midfielder</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player8}
                    value={player8} onChange={(e) => setPlayerName8(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player9 - Midfielder</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player9}
                    value={player9} onChange={(e) => setPlayerName9(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player10 - Forward</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player10}
                    value={player10} onChange={(e) => setPlayerName10(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player11 - Forward</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={player11}
                    value={player11} onChange={(e) => setPlayerName11(e.target.value)}/>
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