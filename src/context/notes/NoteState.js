import React from "react";
import notecontext from "./noteContext";
import { useState } from "react";
import Axios from 'axios'

const NoteState = (props) =>{
  const host = "http://localhost:5000"
  const notesIntial = []
  const [notes, setNotes] = useState(notesIntial)

  const getNotes = async () =>{
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NDBmNzhlZTc3ZmU3NDAzZWY0NTYxIn0sImlhdCI6MTY1MTgxOTI2N30.5AaVuZS2y247W8zOHU16kB5mmPZnY92RqO-CHPfgPaQ'
      },
    });
    const newnotes = await response.json()
    setNotes(newnotes)
    // console.log(newnotes)
  }

    const addNote = async (newnote) =>{
    Axios.post(`${host}/api/notes/addnotes`,newnote,{
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NDBmNzhlZTc3ZmU3NDAzZWY0NTYxIn0sImlhdCI6MTY1MTgxOTI2N30.5AaVuZS2y247W8zOHU16kB5mmPZnY92RqO-CHPfgPaQ'
      }
    })
    }
    const deleteNote = (note) =>{
      Axios.delete(`${host}/api/notes/deletenote/${note._id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NDBmNzhlZTc3ZmU3NDAzZWY0NTYxIn0sImlhdCI6MTY1MTgxOTI2N30.5AaVuZS2y247W8zOHU16kB5mmPZnY92RqO-CHPfgPaQ'
        }
      })
    }
    const updateNote = () =>{

    }
    return(
    <notecontext.Provider value={{notes,addNote,deleteNote,updateNote,getNotes}}>
        {props.children}
    </notecontext.Provider>
    )
}

export default NoteState