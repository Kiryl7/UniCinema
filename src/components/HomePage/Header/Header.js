import React from "react"
import Search from './Search/Search.js'
import SearchButton from './SearchButton/SearchButton.js'
import './Header.css'

function Header() {
    return (
        <div className = "tail-top"> 
            <p>HEllo</p>
            <div className='search-button'>
                <Search/> <SearchButton/>
            </div>    
        </div>
    )
}

export default Header