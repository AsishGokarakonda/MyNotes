import React,{useContext} from 'react'
import notecontext from '../context/notes/noteContext'

export default function NoteItem(props) {
    // console.log(props.note)
    const context = useContext(notecontext)
    const {deleteNote} = context
    const { title, description} = props.note
    return (
        <>
            <div className="col-md-3">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <button style={{border:"0px"}} className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(props.note)}} ></button>
                        <button style={{border:"0px"}} className="far fa-edit mx-2" ></button>
                    </div>
                </div>
            </div>
        </>
    )
}
