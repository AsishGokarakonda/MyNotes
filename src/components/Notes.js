import React,{useContext} from 'react'
import NoteItem from './NoteItem'
import notecontext from '../context/notes/noteContext'
import AddNote from './AddNote'

function Notes() {
    const context = useContext(notecontext)
    const{notes} = context
  return (
      <>
      <AddNote/>
    <div className="row my-3">
    <h1>Your Notes</h1>
    {notes.map((note)=>{
      return <NoteItem note={note} key={note._id}/>
    })}
    </div>
    </>
  )
}

export default Notes