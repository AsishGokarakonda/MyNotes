import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null)
  const promptAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
              <Route path="/" element={<Home promptAlert={promptAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login promptAlert={promptAlert}  />} />
            <Route path="/signup" element={<Signup promptAlert={promptAlert}  />} />
          </Routes>

        </BrowserRouter>
      </NoteState>
    </>

  )
}

export default App;
