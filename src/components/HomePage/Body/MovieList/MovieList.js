import React from 'react'
import styles from './MovieList.css'

const array = [
    {
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun',
        name: 'Darya'
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 2004,
        title: 'Top Otec',
        name: 'Darya'
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 2001,
        title: 'Top Dasha',
        name: 'Darya'
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 2020,
        title: 'Top top',
        name: 'Darya'
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 1111,
        title: 'TITTTTTLE',
        name: 'Darya'
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun',
        name: 'Darya'
    },

]

function MovieList(props) {
    return (
        <div className={styles.indent1}>
            <ul className={styles.movieList}>
                {
                    array.map((obj) => {
                        return (
                            <li className={styles.indent}>
                                <img src={obj.img} className={styles.imgStyle} onClick={props.onClick}/>
                                <div className={styles.description}>
                                    <b className={styles.rightB}>{obj.title}</b>
                                    <p>{obj.age}</p>
                                </div>                 
                                <p>Action</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList