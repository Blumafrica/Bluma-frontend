import React from 'react'
import "./search.css"
import searchIcon from "../assets/search 1.svg"

function SearchBar() {
  return (
    <div className="search-bar">
        <input type="text" />
        <div className='search-icon'>
            <img src={searchIcon} alt="" />
        </div>
    </div>
  )
}

export default SearchBar