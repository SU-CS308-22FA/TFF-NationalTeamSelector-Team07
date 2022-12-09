import {Link, useNavigate} from 'react-router-dom'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainPagePlayerItem from '../components/MainPagePlayerItem'
import {getPlayersHome} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Home() {

    const {user} = useSelector( (state) => state.auth)
    const dispatch = useDispatch()

    const {players, isLoading, isSuccess} = useSelector((state) => state.players)

    useEffect(() => {
        return () => {
            dispatch(getPlayersHome())
        }
    }, [dispatch, isSuccess])

    // 👇️ sort by String property ASCENDING (A - Z)
    const strAscending = [...players].sort((a, b) =>
    a.raiting > b.raiting ? 1 : -1,
    ).reverse();
    

    if(isLoading) {
        return <Spinner />
    }

    const items = [
        {
          id: 0,
          name: 'Cobol'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
      ]
    
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
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }

    return (
        <div>
            {user ? 
            (            
                <>
                <div className="search-box">
                <header className="search-box-header">
                    <div style={{ width: 400, marginBottom:"20px" }}>
                    <ReactSearchAutocomplete
                        items={items}
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
                <div class="btn-group">
                    <Link to='/viewAllPlayers'>
                        <button >View all players</button>
                    </Link>
                    <Link to='/new-team'>
                        <button >Create your team</button>
                    </Link>
                    <Link to='/teams'>
                        <button >View your team</button>
                    </Link>
                    <Link to=''>
                        <button >Top 5 teams</button>
                    </Link>
                </div>
                <hr class="solid" style={{marginTop:"20px"}}></hr>
                <br/>
                <h1>POST TEMPLATES(IN PROGRESS...)</h1>
                </>
            )
            : 
            (
                <>
                <div style={{marginBottom:"20px"}}>
                    <h1>TOP 5 PLAYERS OF THE MONTH</h1>
                </div>
                <div className="tickets">
                    <div className="ticket-headings">
                        <div>Name</div>
                        <div>Team</div>
                        <div>Position</div>
                        <div>Rating</div>
                    </div>
                    {strAscending.slice(0,5).map((player) => (
                        <MainPagePlayerItem key={player._id} player={player}/>
                    ))}
                </div>
                </>
            )
            }             
        </div>
    )
}

export default Home