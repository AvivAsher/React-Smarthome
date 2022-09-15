import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Homepage.css'

export default function Homepage(props) {

  const nav = useNavigate();

  return (
    <div className='home-container'>
      <div className='roomsDiv'>
        {props.rooms.map((val,i)=>{
          return <div onClick={()=>{nav('/room');props.indexFunc(i)}} className='eachDiv' style={{backgroundColor: val.color}} index = {i}>{val.name}</div>
        })}
      </div>
      <div className='addRoomDivBtn'>
      <button className='newRoombtn' onClick={()=>{nav('/addroom')}}>Add a new room</button>

      </div>
    </div>
  )
}
