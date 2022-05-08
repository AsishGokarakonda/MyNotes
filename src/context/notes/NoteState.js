import React from "react";
import notecontext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesIntial = [
        {
          "_id": "6274cab8b9266d759158fc52",
          "userId": "62740f78ee77fe7403ef4561",
          "title": "school4",
          "description": "wear shoes4",
          "tag": "punishment",
          "date": "2022-05-06T07:14:00.329Z",
          "__v": 0
        },
        {
          "_id": "6274cab8b9266d759158fc54",
          "userId": "62740f78ee77fe7403ef4561",
          "title": "school4",
          "description": "wear shoes4",
          "tag": "punishment",
          "date": "2022-05-06T07:14:00.626Z",
          "__v": 0
        },
        {
          "_id": "6274cab8b9266d759158fc56",
          "userId": "62740f78ee77fe7403ef4561",
          "title": "school4",
          "description": "wear shoes4",
          "tag": "punishment",
          "date": "2022-05-06T07:14:00.779Z",
          "__v": 0
        },
        {
          "_id": "6274cab8b9266d759158fc58",
          "userId": "62740f78ee77fe7403ef4561",
          "title": "school4",
          "description": "wear shoes4",
          "tag": "punishment",
          "date": "2022-05-06T07:14:00.913Z",
          "__v": 0
        },
        // {
        //   "_id": "6274cab9b9266d759158fc5a",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:01.198Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cab9b9266d759158fc5c",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:01.347Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cab9b9266d759158fc5e",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:01.613Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cab9b9266d759158fc60",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:01.920Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cabab9266d759158fc62",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:02.139Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cabab9266d759158fc64",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:02.418Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cabab9266d759158fc66",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:02.562Z",
        //   "__v": 0
        // },
        // {
        //   "_id": "6274cabab9266d759158fc68",
        //   "userId": "62740f78ee77fe7403ef4561",
        //   "title": "school4",
        //   "description": "wear shoes4",
        //   "tag": "punishment",
        //   "date": "2022-05-06T07:14:02.699Z",
        //   "__v": 0
        // }
      ]
    const [notes, setNotes] = useState(notesIntial)

    const addNote = (title,description,tag) =>{
      console.log('first')
      const note={
        "_id": "6274cabab9266d759158fc61",
        "userId": "62740f78ee77fe7403ef4561",
        "title": "college Added",
        "description": "college shirt",
        "tag": "punishment",
        "date": "2022-05-06T07:14:02.699Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
      console.log(notes)
    }
    const deleteNote = () =>{

    }
    const updateNote = () =>{

    }
    return(
    <notecontext.Provider value={{notes,addNote,deleteNote,updateNote}}>
        {props.children}
    </notecontext.Provider>
    )
}

export default NoteState