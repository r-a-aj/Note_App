import {useState} from 'react'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import SearchBar from './components/SearchBar'
import SortingOptions from './components/SortingOptions'
import LoginPage from './components/LoginPage'

import './App.css'

function App() {
  const [notes, setNotes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('desc')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleSearch = query => {
    setSearchQuery(query)
  }

  const handleSortOrderChange = order => {
    setSortOrder(order)
  }

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
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
            <NoteList
              notes={notes}
              setNotes={setNotes}
              searchQuery={searchQuery}
              sortOrder={sortOrder}
            />
            <NoteForm notes={notes} setNotes={setNotes} />
          </main>
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
