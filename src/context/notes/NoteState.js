import React from "react";
import notecontext from "./noteContext";
import { useState } from "react";
import Axios from 'axios'

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesIntial = []
  const [notes, setNotes] = useState(notesIntial)

  const getNotes = async (authtoken) => {
    // console.log("HI");
    // console.log(authtoken);
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authtoken,
      },
    });
    const newnotes = await response.json()
    setNotes(newnotes)
    // console.log(newnotes)
  }

  const addNote = async (newnote,authtoken) => {
    Axios.post(`${host}/api/notes/addnotes`, newnote, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': authtoken
      }
    })
  }
  const deleteNote = (note,authtoken) => {
    Axios.delete(`${host}/api/notes/deletenote/${note._id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': authtoken
      }
    })
  }
  const updateNote = async (id, note,authtoken) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authtoken
      },
      body: JSON.stringify(note)
    });
    await response.json()
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = note.title
        element.description = note.description
        element.tag = note.tag
      }
    }
  }
  return (
    <notecontext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </notecontext.Provider>
  )
}

export default NoteState