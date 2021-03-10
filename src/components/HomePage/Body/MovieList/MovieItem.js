import React from 'react'
import styles from './MovieList.css'


function MovieItem(props) {

    return (
            <li className={styles.indent} onClick={() => props.onOpen(props.data.id)}>
                <img src={props.data.img} className={styles.imgStyle}/>
                <div className={styles.description}>
                    <b className={styles.rightB}>{props.data.title}</b>
                    <p>{props.data.age}</p>
                </div>
                <p>{props.data.ganre}</p>
            </li>
    )
}

export default MovieItem