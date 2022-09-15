import React from 'react'
import { useState } from 'react'
import './Room.css'


export default function Room(props) {

  const [popUpFlag, setPopUpFlag] = useState(false);  //Show add device selection hook
  const [flag,setFlag] = useState(false);
  
  const checkDevice = (newDevice, currentRoomType) => {  //Adding new device.

    if (props.currentRoom.deviceArr.length < 5)
    {
      if (newDevice == undefined || newDevice == 'Select Device' || newDevice == '')
        return alert('Please select a device')
      else
      {
        if (newDevice == 'Boiler' && currentRoomType != 'Bathroom')
          alert('Can only add boilers in the bathroom')

        else {
          if (newDevice == 'Stereo')
          {
            if (props.currentRoom.cnt == 1)
              return alert('Can only add 1 stereo per room')

            else {
              props.currentRoom.deviceArr.push(new Device(newDevice))
              setPopUpFlag(false)
              props.setSelectedDevice('');
              props.currentRoom.cnt++
              return
            }
          }

          else {
            props.currentRoom.deviceArr.push(new Device(newDevice))
            setPopUpFlag(false)
            props.setSelectedDevice('');

          }
        }

      }

    }
    else
      alert('You cannot add more devices')
  }


  const onDeviceClick = (val) =>{
    
    if(val.status == true)
       val.status = false
    else
      val.status = true

    setFlag(!flag)
  }

  const checkStatus = (status)=>{
    if(status == true)
      return 'green'
    else
    return 'red'
  }

  return (
    <div className='room-container'>

      <h2>Room Type: <span>{props.currentRoom.type}</span></h2>
      <h2>Room Name: <span>{props.currentRoom.name}</span></h2>
      <button className='roomBtn' onClick={() => { setPopUpFlag(!popUpFlag) }}>Add Device / Close</button>

      {/* Toggle On Off Select Device */}
      {popUpFlag && (
        <div className='room-select'>
          <select onChange={(e) => { props.setSelectedDevice(e.target.value) }}>
            <option value="Select Device">--- Select Device ---</option>
            <option value="AC">AC</option>
            <option value="Boiler">Boiler</option>
            <option value="Stereo">Stereo</option>
            <option value="Light">Light</option>
          </select><br />

          <button className='roomBtn' onClick={() => { checkDevice(props.selectedDevice, props.currentRoom.type) }}>Add device to room</button>
        </div>
      )}

      <div className='all-devices'>{/* Show Devices inside the room */}
        {props.currentRoom.deviceArr.map((val) => {
          return <div onClick={() => {onDeviceClick(val)}} className='device-bg'><h2 style={{ backgroundColor: checkStatus(val.status)}}>{val.name}</h2></div>
        })}
      </div>
    </div>
  )
}

class Device {
  status = false;
  constructor(name){
    this.name = name;
  }
}