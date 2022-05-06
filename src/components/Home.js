import React,{useContext} from 'react'
import notecontext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
export default function Home() {
  const context = useContext(notecontext)
  const {notes,setNotes} = context
  return (
    <div className="container my-3">
      <h1>Add A Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">Title</label>
          <input type={"text"} className="form-control" id="Title1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Description</label>
          <input type="text" className="form-control" id="Description1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Tag</label>
          <input type="text" className="form-control" id="Tag1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h1 className='my-3'>Your Notes</h1>
      <div className="row">
      {notes.map((note)=>{
        return <NoteItem note={note} key={note._id}/>
      })}
      </div>
    </div>
  )
}
