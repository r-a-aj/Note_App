// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'

function Note({note, onDeleteNote}) {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      {note.image && <img src={note.image} alt="Note" />}
      {note.video && (
        <video src={note.video} controls>
          <track
            kind="captions"
            src="https://e7.pngegg.com/pngimages/709/765/png-clipart-melody-musical-note-sheet-music-song-music-sound-waves-angle-text.png"
            srcLang="en"
            label="English"
          />
        </video>
      )}
      {onDeleteNote && typeof onDeleteNote === 'function' && (
        // eslint-disable-next-line react/button-has-type
        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
      )}
    </div>
  )
}

export default Note
