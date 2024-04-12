// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'

function SortingOptions({onSort}) {
  const handleSortChange = e => {
    const selectedOption = e.target.value
    onSort(selectedOption)
  }

  return (
    <div className="sorting-options">
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}

export default SortingOptions
