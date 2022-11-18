
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { createPlayer, reset } from '../features/players/playerSlice'
import Spinner from '../components/Spinner'

function NewPlayer() {
    const { user } = useSelector((state) => state.auth)
    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.players
    )
    //////////////////////////////////////////////////////////////////
    
    
    

    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [fullName, setPlayerName] = useState()
    const [team, setPlayerTeam] = useState()
    const [position, setPlayerPosition] = useState()
    const [raiting, setPlayerRaiting] = useState()
    const fileReader = new FileReader();
  
   


    const handleOnChangeCSV = (e) => {
      setFile(e.target.files[0]);
    };
  
    const csvFileToArray = string => {
      const csvHeader = string.slice(0, string.indexOf("\n")).split(";");
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
      //console.log(csvHeader)
      //console.log(csvRows)
      
      const array = csvRows.map(i => {
        const values = i.split(";");
        const obj = csvHeader.reduce((object, header, index) => {
            
          object[header] = values[index];
          
         
          return object;
        }, {});
        //console.log("196: " ,obj)
        return obj;
      });
      
      setArray(array);
    };

    function arrayToDb(){



    }
  
    const handleOnSubmitCSV = (e) => {
      e.preventDefault();
  
      if (file) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          csvFileToArray(text);
        };
  
        fileReader.readAsText(file);
      }
    };
  
    const headerKeys = Object.keys(Object.assign({}, ...array));
    //console.log("211: " + headerKeys)
  


    /////////////////////////////////////////////////////////////////

   
    // const [name] = useState(user.name)
    // const [email] = useState(user.email)
    //const [file, setFile] = useState()


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
        

        dispatch(createPlayer({fullName, team, position, raiting}))

    }

    const onSubmitDB = (e) => {
        e.preventDefault()
        for(let k=0; k < Object.entries(array).length; k++){
            
           
            const fullName=Object.values(array)[k].Name
            const position= Object.values(array)[k].Position
            const team=Object.values(array)[k].Team
            const raiting =Object.values(array)[k].Rating
            dispatch(createPlayer({fullName, team, position, raiting}))
            
        }

    }

    if(isLoading) {
        return <Spinner />
    }

    ///////////////////////////////////////

   


    
    return (
        <>
            <section className="heading">

                <h1>Create New Player</h1>
                <p>Please Fill Out the Form Below</p>
            </section>
            <form onSubmit={onSubmit}>
            <section className="form">
                <div className="form-group">
                    <label htmlFor="fullName">Player Name</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={fullName}
                    value={fullName} onChange={(e) => setPlayerName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="team">team</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={team}
                    value={team} onChange={(e) => setPlayerTeam(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="position">position</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={position}
                    value={position} onChange={(e) => setPlayerPosition(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="raiting">rating</label>
                    <input type="text" 
                    className="form-control"
                    placeholder={raiting}
                    value={raiting} onChange={(e) => setPlayerRaiting(e.target.value)}/>
                </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </div>

                    </section>

                </form>
                <div style={{ textAlign: "center" }}>
                <h1>REACTJS CSV IMPORT EXAMPLE </h1>
                <form>
                    <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChangeCSV}
                    />

                    <button
                    onClick={(e) => {
                        handleOnSubmitCSV(e);
                    }}
                    >
                    IMPORT CSV
                    </button>
                </form>
                <form onSubmit={onSubmitDB}>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit to Database
                        </button>
                    </div>
                </form>
                

                <br />

                <table>
                    <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                        <th>{key}</th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {array.map((item) => (
                        <tr key={item.id}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            

        </>
    )

}

export default NewPlayer