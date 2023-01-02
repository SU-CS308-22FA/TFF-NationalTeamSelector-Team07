import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import {useSelector, useDispatch} from 'react-redux'
import {getPlayersHome} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'
import MainPagePlayerItem from '../components/MainPagePlayerItem'
import playerService from '../features/players/playerService'



function ViewAllPlayers() {
    const {player, isLoading, isSuccess} = useSelector((state) => state.players)
    const {players} = useSelector((state) => state.players)

    const [playerList, setPlayersList] =  useState([])
    const [selectedPlayer] = useState({})
    const navigate = useNavigate()


    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getPlayersHome())
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        return async () => {

          setPlayersList(await playerService.getPlayers() || []);

        }
        
    },)

    //console.log("lINE 40: " + playerlist)

    const strAscending = [...players].sort((a, b) =>
    a.raiting > b.raiting ? 1 : -1,
    ).reverse();

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        //console.log("LINE 59" + item)
        selectedPlayer.fullName = item.fullName
        selectedPlayer.team = item.team
        selectedPlayer._id = item._id
        selectedPlayer.position = item.position
        selectedPlayer.raiting = item.raiting
        selectedPlayer.DateOfBirth = item.DateOfBirth
        selectedPlayer.PreferedFoot = item.PreferedFoot
        selectedPlayer.Age = item.Age
        selectedPlayer.PlaceOfBirth = item.PlaceOfBirth
        selectedPlayer.personel = item.personel
        navigate("/player-profile/:personel", {state:{fullName:selectedPlayer.fullName, 
                                            team:selectedPlayer.team, 
                                            _id:selectedPlayer._id, 
                                            poisiton: selectedPlayer.position,
                                            raiting :selectedPlayer.fullName, 
                                            DateOfBirth:selectedPlayer.DateOfBirth, 
                                            PreferedFoot:selectedPlayer.PreferedFoot, 
                                            Age:selectedPlayer.Age,
                                            PlaceOfBirth:selectedPlayer.PlaceOfBirth, 
                                            personel:selectedPlayer.personel}})
      }
      
      const handleOnFocus = () => {
        console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.fullName}</span>
          </>
        )
      }
    

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <h1>PLAYERS</h1>
            <div className="search-box" style={{zIndex:"2"}}>
                <header className="search-box-header">
                    <div style={{ width: 400, marginBottom:"20px", zIndex:"2" }}>
                    <ReactSearchAutocomplete
                        items={playerList}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                    </div>
                </header>
            </div>


            <div className="tickets">
                <div className="ticket-headings">
                    <div>Name</div>
                    <div>Team</div>
                    <div>Position</div>
                    <div>Rating</div>
                </div>
                
                {/* {players.map((player) => (
                    <MainPagePlayerItem key={player._id} player={player}/>
                ))} */}
                {strAscending.map((player) => (
                    <MainPagePlayerItem key={player._id} player={player}/>
                ))}
            </div>
        </>
    )
}

export default ViewAllPlayers