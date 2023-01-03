import Display from './components/Display';
import Header from './components/Header'
import Form from '../src/components/Form'
import Delete from './components/Delete'
import React, { useState } from 'react'
import './App.css'
import Update from './components/Update';
// import './App.css';
function App() {
  const [openMod, setOpenmod] = useState(false);
  const [updateMod, setUpdate] = useState(false)
  const [id,setId] = useState('')
  const f = (val) => {
    // console.log(val)
    setId(val)
  }
  // console.log(id)
  const [openModal, setModal] = useState(false);
  return (
    <div className="App">
      {!updateMod && !openMod && <Header closeModal={setOpenmod} />}
      {!updateMod && !openMod && !openModal && <Display setModal={setModal}  seId={f} setUpdatemod={setUpdate}/>}
      {openModal && <Delete setModal={setModal}  ids={id} />}
      {openMod && <Form closeModal={setOpenmod} />}
      {updateMod && <Update closeModal={setUpdate} ids={id}/>}
    </div>
  );
}

export default App;
