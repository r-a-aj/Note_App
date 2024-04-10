// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './index.css'

function SearchBar({onSearch}) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = e => {
    setSearchQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
