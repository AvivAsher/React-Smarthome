import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Homepage from './Components/Homepage';
import AddRoom from './Components/AddRoom';
import Room from './Components/Room';


function App() {

  const selectList = [{ type: 'Bedroom' }, { type: 'Bathroom' }, { type: 'Kitchen' }, { type: 'Living room' }]; //Room Selection Array

  const [selectedDevice, setSelectedDevice] = useState(); //Selected Device from Device List
  const [roomArr, setRoomArr] = useState([]);  //Room Array
  const [roomIndex, setRoomindex] = useState();  //Room Index


  const addRoomFunc = (t, n, c) => {  //Add Room To Array Function(seent to AddRoom Component)

    if (t == 'Choose a room' || t == undefined) {
      alert('Please select a room type')
    }

    else if (n == undefined || n == '' || n.length > 5) {
      alert('Please enter a room name, up to 5 characters')
    }

    else if (c == undefined || c == '') {
      alert('Please select a room color')
    }

    else {

      let temp = {
        type: t,
        name: n,
        color: c,
        deviceArr: [], //add Device to the room
        cnt: 0
      }
      setRoomArr([...roomArr, temp])
    }
  }

  const selectedRoom = (index) => {
    setRoomindex(roomArr[index])
  }

  
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', fontSize: '40px', textDecoration: 'underline' }}>Smart Home</h1>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage rooms={roomArr} indexFunc={selectedRoom} />} />
            <Route path='/addroom' element={<AddRoom type={selectList} addroom={addRoomFunc} />} />
            <Route path='/room' element={<Room currentRoom={roomIndex} selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
