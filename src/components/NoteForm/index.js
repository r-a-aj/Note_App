// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './index.css'

function NoteForm({onAddNote}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      id: Date.now(),
      title,
      description,
      image,
      video,
      createdAt: new Date().toISOString(),
    }
    onAddNote(newNote)
    setTitle('')
    setDescription('')
    setImage('')
    setVideo('')
  }

  return (
    <div className="note-form">
      <h2>Create New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video URL"
          value={video}
          onChange={e => setVideo(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default NoteForm
