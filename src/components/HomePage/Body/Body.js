import React from 'react'
import MovieList from './MovieList/MovieList'

import styles from './Body.css'

function Body (props) {
    return (
        <div className={styles.body}>
            <MovieList onClick={props.onClick}/>
        </div>
    )
}

export default Body