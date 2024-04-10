import {useState} from 'react'
import './App.css'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import SearchBar from './components/SearchBar'
import SortingOptions from './components/SortingOptions'

function App() {
  const [notes, setNotes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('desc')

  // Function to handle note creation
  const handleAddNote = newNote => {
    setNotes([...notes, newNote])
  }

  // Function to handle note deletion
  const handleDeleteNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  // Function to handle search query change
  const handleSearch = query => {
    setSearchQuery(query)
  }

  // Function to handle sorting order change
  const handleSortOrderChange = order => {
    setSortOrder(order)
  }

  // Filter notes based on search query
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort notes based on time
  const sortedNotes = filteredNotes.sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notes App</h1>
      </header>
      <main>
        <div className="controls">
          <SearchBar onSearch={handleSearch} />
          <SortingOptions
            sortOrder={sortOrder}
            onSortOrderChange={handleSortOrderChange}
          />
        </div>
        <NoteList notes={sortedNotes} onDeleteNote={handleDeleteNote} />
        <NoteForm onAddNote={handleAddNote} />
      </main>
    </div>
  )
}

export default App
