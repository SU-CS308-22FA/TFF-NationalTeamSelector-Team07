// import React, { Component, useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
// import { useSelector} from 'react-redux'
// import { useDispatch } from 'react-redux'
// import {createPlayer} from '../features/players/playerSlice'
// import Spinner from '../components/Spinner'
// import { toast } from 'react-toastify'
// function NewPlayer() {

//     // const {} = useSelector(
//     //     (state) => state.players
//     // )
//   // Setting up functions
//   const dispatch = useDispatch()
  
//   // Setting up state

// //   useEffect(() => {
   

//     // if(isSuccess) {
        
//     //     console.log("success")
//     // }
//     // }, [dispatch, message])

//   const [FullName, setFullName] = useState({
//     fullName: ''
//     })
//     const [Team, setTeam] = useState({

//     team: ''
//     })
//     const [Position, setPosition] = useState({

//     position: ''
//     })
//     const [Raiting, setRaiting] = useState({

//         raiting: ''
//     })
// // const {fullName, team, position, raiting} = formData

// // const onChange = (e) => {
// //     setFromData( (prevState) => ({
// //         ...prevState, 
// //         [e.target.fullName]: e.target.value,
// //         [e.target.team]: e.target.value,
// //         [e.target.position]: e.target.value,
// //         [e.target.raiting]: e.target.value,
// //     }))
// // }

// //   const onChangeFullName = (e) => {
// //     useState({ fullName: e.target.value })
// //   }

// //   const onChangeTeam = (e) =>  {
// //     useState({ team: e.target.value })
// //   }

// //   const onChangePosition = (e) => {
// //     useState({ position: e.target.value })
// //   }

// //   const onChangeRaiting = (e) =>  {
// //     useState({ raiting: e.target.value })
// //   }


//   const onSubmit = (e) =>  {
//     e.preventDefault()

//     const playerObject = {
//       fullName: FullName,
//       team: Team,
//       position: Position,
//       raiting: Raiting
//     };
//     dispatch(createPlayer({FullName, Team, Position, Raiting}))
//   }
// //   if(isLoading) {
// //     return <Spinner />
// // }

  
//     return (<div className="form-wrapper">
//       <div>
//           <h3>Add Football Player</h3>
//       </div>
//       <section className="form">
//                 <form onSubmit={onSubmit}>
//                     <div className="form-group">
//                         <input type="text" className='form-control'
//                         id='fullName' value={FullName} name='fullName' onChange={(e) => setFullName(e.target.value)}
//                         placeholder='Enter football player full name' required />
//                     </div>
//                     <div className="form-group">
//                         <input type="text" className='form-control'
//                         id='team' value={Team} name='team' onChange={(e) => setTeam(e.target.value)}
//                         placeholder='Enter team' required/>
//                     </div>
//                     <div className="form-group">
//                         <input type="text" className='form-control'
//                         id='position' value={Position} name='position' onChange={(e) => setPosition(e.target.value)} 
//                         placeholder='Enter position' required/>
//                     </div>
//                     <div className="form-group">
//                         <input type="text" className='form-control'
//                         id='raiting' value={Raiting} name='raiting' onChange={(e) => setRaiting(e.target.value)}
//                         placeholder='Enter raiting' required/>
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-block">
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </section>
//       {/* <Form onSubmit={onSubmit}>
//         <Form.Group controlId="fullName">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control type="text" value={fullName} onChange={(e) => fullName(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="team">
//           <Form.Label>Team</Form.Label>
//           <Form.Control type="text" value={team} onChange={(e) => team(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="position">
//           <Form.Label>Position</Form.Label>
//           <Form.Control type="text" value={position} onChange={(e) => position(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="raiting">
//           <Form.Label>Raiting</Form.Label>
//           <Form.Control type="text" value={raiting} onChange={(e) => raiting(e.target.value)} />
//         </Form.Group>


//         <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
//           Create Football Player!
//         </Button>
//       </Form> */}
//     </div>);
//   }
// export default NewPlayer

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

    const [fullName, setPlayerName] = useState()
    const [team, setPlayerTeam] = useState()
    const [position, setPlayerPosition] = useState()
    const [raiting, setPlayerRaiting] = useState()
    const [name] = useState(user.name)
    const [email] = useState(user.email)

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

    if(isLoading) {
        return <Spinner />
    }

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
            
        </>
    )

}

export default NewPlayer