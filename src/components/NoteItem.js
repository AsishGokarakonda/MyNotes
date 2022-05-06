import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteItem(props) {
    // console.log(props.note)
    const { title, description} = props.note
    return (
        <>
            <div className="col-md-3">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <Link to="/about">
                    <img src="trash.png" style={{width:"10%",marginLeft:"-2%",marginTop:"-2%"}} alt="" />
                    </Link>
                    <Link to="/about">
                    <img src="update.png" style={{width:"7%",marginLeft:"2%",marginTop:"-2%"}} alt="" />
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
