import React from "react"
import Search from './Search/Search.js'
import SearchButton from './SearchButton/SearchButton.js'
import SearchFilter from './SearchFilter/SearchFilter.js'
import './Header.css'

function Header() {
    return (
        <div className = "tail-top"> 
            <p className = 'header-p'>FIND YOUR MOVIE</p>
            <div className='search-button'>
                <Search/> <SearchButton/>
            </div>    
            <SearchFilter/>
        </div>
    )
}

export default Header