import React, { useContext, useEffect,useState } from 'react'
import NoteItem from './NoteItem'
import notecontext from '../context/notes/noteContext'
import AddNote from './AddNote'


function Notes(props) {
  const context = useContext(notecontext)
  const { notes, getNotes,updateNote} = context
  const [note, setNote] = useState({title:"",description:"",tag:""})
  const [id, setId] = useState("")
  useEffect(() => {
    getNotes()
  })
  const modifyNote = (currentNote) => {
    document.getElementById('launchdemo').click()
    setNote({title:currentNote.title,description:currentNote.description,tag:currentNote.tag})
    setId(currentNote._id)
  }
  const handleClick = (e) => {
    e.preventDefault();
    updateNote(id,note)
    document.getElementById('modalclose').click()
    props.promptAlert("Note updated","success")
  }
  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote promptAlert={props.promptAlert} />
      <button type="button" className="btn btn-primary d-none" id='launchdemo' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="htmlForm-label">Title</label>
                  <input type={"text"} className="form-control" id="title1" value={note.title} name='title' onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="htmlForm-label">Description</label>
                  <input type="text" className="form-control" id="description1" value={note.description} name='description' onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="htmlForm-label">Tag</label>
                  <input type="text" className="form-control" id="tag1" value={note.tag} name='tag' onChange={handleOnChange} />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" id='modalclose' className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-3">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return <NoteItem note={note} modifyNote={modifyNote} key={note._id}  />
        })}
      </div>
    </>
  )
}

export default Notes