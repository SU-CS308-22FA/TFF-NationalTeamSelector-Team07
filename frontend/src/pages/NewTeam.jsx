import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTeam, reset } from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'
import Dropdown from 'react-dropdown';
import PlayerDropdownItem from '../components/PlayerDropdownItem'
import 'react-dropdown/style.css';
import _ from 'lodash';
import playerService from '../features/players/playerService'

function NewTeam() {
    const { user } = useSelector((state) => state.auth)
    //const { players, player } = useSelector((state) => state.players)
    const [playerList, setPlayerList] = useState([])
    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.teams)
    //const [playerName] = useState(players.fullName)
    //const [playerPosition] = useState(players.position)

    const [player1, setPlayerName1] = useState({player1:'',})
    const [player2, setPlayerName2] = useState({player2:'',})
    const [player3, setPlayerName3] = useState({player3:'',})
    const [player4, setPlayerName4] = useState({player4:'',})
    const [player5, setPlayerName5] = useState({player5:'',})
    const [player6, setPlayerName6] = useState({player6:'',})
    const [player7, setPlayerName7] = useState({player7:'',})
    const [player8, setPlayerName8] = useState({player8:'',})
    const [player9, setPlayerName9] = useState({player9:'',})
    const [player10, setPlayerName10] = useState({player10:'',})
    const [player11, setPlayerName11] = useState({player11:'',})

    const [email] = useState(user.email)
    const [teamName, setTeamName] = useState()
    const dispatch = useDispatch()


    useEffect(() => {
        return async () => {
            
            setPlayerList(await playerService.getPlayers())
            
        }
    }, [dispatch, isSuccess])

    const onSubmit =(e) => {
        e.preventDefault()
        // if(player1!== player2!== player3!== player4!== player5!== player6!== player7!== player8!== player9!== player10!== player11){
        //     dispatch(createTeam({player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, teamName, email}))
        // }
        // else{
        //     toast.error('please select a different player')
        // }
        dispatch(createTeam({player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, teamName, email}))
        }
    
    const playerOptions = playerList.map((player, index) => (
    <PlayerDropdownItem key={index} player={player} value={player.fullName}>{player.fullName}</PlayerDropdownItem>
    ))
    

    if(isLoading) {
        return <Spinner />
    }
    const set_p1 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName1({...player1,[event.target.name]:event.target.value})
    }
    const set_p2 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName2({...player2,[event.target.name]:event.target.value})
      }
      const set_p3 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName3({...player3,[event.target.name]:event.target.value})
      }
      const set_p4 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName4({...player4,[event.target.name]:event.target.value})
      }
      const set_p5 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName5({...player5,[event.target.name]:event.target.value})
      }
      const set_p6 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName6({...player6,[event.target.name]:event.target.value})
      }
      const set_p7 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName7({...player7,[event.target.name]:event.target.value})
      }
      const set_p8 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName8({...player8,[event.target.name]:event.target.value})
      }
      const set_p9 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName9({...player9,[event.target.name]:event.target.value})
      }
      const set_p10 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName10({...player10,[event.target.name]:event.target.value})
      }
      const set_p11 = event =>{
        console.log(event.target.name, event.target.value)
        setPlayerName11({...player11,[event.target.name]:event.target.value})
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
                    <label htmlFor="player1">Player1 - Goalkeeper: {player1.fullName}</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player1} onChange={(event) => set_p1(event)} key={Math.random()}  placeholder="Select a Goalkeeper" />
                    </form>
                     
                    {/* <input type="text" 
                    className="form-control"
                    placeholder={player1}
                    value={player1} onChange={(e) => setPlayerName1(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player2">Player2 - Defender</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player2} onChange={(event) => set_p2(event)} key={Math.random()} placeholder="Select a Defender" />
                    </form>
                   {/* <input type="text" 
                    className="form-control"
                    placeholder={player2}
                    value={player2} onChange={(e) => setPlayerName2(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player3">Player3 - Defender</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player3} onChange={(event) => set_p3(event)} key={Math.random()} placeholder="Select a Defender" />
                    </form>
                   {/* <input type="text" 
                    className="form-control"
                    placeholder={player3}
                    value={player3} onChange={(e) => setPlayerName3(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player4">Player4 - Defender</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player4} onChange={(event) => set_p4(event)} key={Math.random()} placeholder="Select a Defender" />
                    </form>
                    {/*<input type="text" 
                    className="form-control"
                    placeholder={player4}
                    value={player4} onChange={(e) => setPlayerName4(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player5">Player5 - Defender</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player5} onChange={(event) => set_p5(event)} key={Math.random()} placeholder="Select a Defender" />
                    </form>
                    {/*<input type="text" 
                    className="form-control"
                    placeholder={player5}
                    value={player5} onChange={(e) => setPlayerName5(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player6 - Midfielder</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player6} onChange={(event) => set_p6(event)} key={Math.random()} placeholder="Select a Midfielder" />
                    </form>
                    {/*<input type="text" 
                    className="form-control"
                    placeholder={player6}
                    value={player6} onChange={(e) => setPlayerName6(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player7 - Midfielder</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player7} onChange={(event) => set_p7(event)} key={Math.random()} placeholder="Select a Midfielder" />
                    </form>
                    {/* <input type="text" 
                    className="form-control"
                    placeholder={player7}
                    value={player7} onChange={(e) => setPlayerName7(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player8 - Midfielder</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player8} onChange={(event) => set_p8(event)} key={Math.random()} placeholder="Select a Midfielder" />
                    </form>
                    {/* <input type="text" 
                    className="form-control"
                    placeholder={player8}
                    value={player8} onChange={(e) => setPlayerName8(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player9 - Midfielder</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player9} onChange={(event) => set_p9(event)} key={Math.random()} placeholder="Select a Midfielder" />
                    </form>
                    {/* <input type="text" 
                    className="form-control"
                    placeholder={player9}
                    value={player9} onChange={(e) => setPlayerName9(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player10 - Forward</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player10} onChange={(event) => set_p10(event)} key={Math.random()} placeholder="Select a Forward" />
                    </form>
                    {/* <input type="text" 
                    className="form-control"
                    placeholder={player10}
                    value={player10} onChange={(e) => setPlayerName10(e.target.value)}/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="player">Player11 - Forward</label>
                    <form type="dropdown">
                        <Dropdown required={true} id="dropdown-basic-button" options={playerOptions} value={player11} onChange={(event) => set_p11(event)} key={Math.random()} placeholder="Select a Forward" />
                    </form>
                    {/* <input type="text" 
                    className="form-control"
                    placeholder={player11}
                    value={player11} onChange={(e) => setPlayerName11(e.target.value)}/> */}
                </div>
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