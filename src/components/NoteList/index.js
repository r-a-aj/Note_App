// eslint-disable-next-line no-unused-vars
import React from 'react'
import Note from '../Note'
import './index.css'

function NoteList({notes, onDeleteNote}) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  )
}

export default NoteList
