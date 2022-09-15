import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddRoom.css'

export default function AddRoom(props) {

  const nav = useNavigate();

  const [selectRoom,setSelectRoom] =useState();
  const [roomName,setRoomName] =useState();
  const [roomColor,setRoomColor] =useState();

  return (
    <div className='addRoom-container'>
      <h1>Add a Room:</h1>

      <select onChange={(e)=>{setSelectRoom(e.target.value)}}>
        <option>--- Choose a room ---</option>
        {props.type.map((val)=>{
          return <option>{val.type}</option>
        })}
      </select><br /><br />

      <input onChange={(e) => {setRoomName(e.target.value)}} type="text" placeholder='Room Name...'/><br /><br />

      <select onChange={(e) => {setRoomColor(e.target.value)}}>
        <option value="Select Color">--- Select Color ---</option>
        <option style={{backgroundColor: 'red'}}  value="red">Red</option>
        <option style={{backgroundColor: 'blue'}}  value="blue">Blue</option>
        <option style={{backgroundColor: 'white'}}  value="white">White</option>
        <option style={{backgroundColor: 'yellow'}}  value="yellow">Yellow</option>
        <option style={{backgroundColor: 'lightgray'}}  value="lightgray">Light gray</option>
        <option style={{backgroundColor: 'green'}}  value="green">Green</option>
        <option style={{backgroundColor: 'purple'}}  value="purple">Purple</option>
      </select><br /><br />

      <button className='addRoomBtn' onClick={() => {props.addroom(selectRoom,roomName,roomColor);nav('/')}}>Add room</button>

    </div>
  )
}
