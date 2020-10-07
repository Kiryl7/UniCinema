import React from 'react'
import MovieList from './MovieList/MovieList'

import styles from './Body.css'

function Body () {
    return (
        <div className={styles.body}>
            <MovieList/>
        </div>
    )
}

export default Body