import React, { useContext, useState } from 'react'
import notecontext from '../context/notes/noteContext'

function AddNote(props) {
  const context = useContext(notecontext)
  const { addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note)
    setNote({ title: "", description: "", tag: "" })
    props.promptAlert("Note added", "success")
  }
  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className="container my-3">
      <h1>Add A Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">Title</label>
          <input type={"text"} className="form-control" id="Title1" value={note.title} name='title' required onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Description</label>
          <input type="text" className="form-control" id="Description1" value={note.description} required name='description' onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Tag</label>
          <input type="text" className="form-control" id="Tag1" name='tag' value={note.tag} onChange={handleOnChange} />
        </div>
        <button type="submit" disabled={note.title.length === 0 || note.description.length === 0} className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default AddNote