import React from "react"
import Search from './Search/Search.js'
import SearchButton from './SearchButton/SearchButton.js'
import SearchFilter from './SearchFilter/SearchFilter.js'
import styles from './Header.css'

function Header() {
    return (
        <div className={styles.tailTop}> 
            <p className={styles.header}>FIND YOUR MOVIE</p>
            <div className={styles.search}>
                <Search/> <SearchButton/>
            </div>    
            <SearchFilter/>
        </div>
    )
}

export default Header