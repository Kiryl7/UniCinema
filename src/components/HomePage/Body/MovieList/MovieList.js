import React from 'react'
import styles from './MovieList.css'
import MovieItem from './MovieItem'

const array = [
    {
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun',
        name: 'Darya',
        id: 1
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 2004,
        title: 'Top Otec',
        name: 'Otec',
        id: 2
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 2001,
        title: 'Top Dasha',
        name: 'Zheka',
        id: 3
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 2020,
        title: 'Top top',
        name: 'Vlados',
        id: 4
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 1111,
        title: 'TITTTTTLE',
        name: 'Masha',
        id: 5
    },
    {
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun1',
        name: 'Demyanok',
        id: 6
    },

]


function MovieList(props) {

    const openFilm = (id) => {
        const findObj = array.find(obj => {
            return obj.id === id
        })
    
        props.onClick(findObj)
    }

    return (
        <div className={styles.indent1}>
            <ul className={styles.movieList}>
                {
                    array.map((obj) => {
                        return (
                            <MovieItem key={obj.id} onClick={props.onClick} data={obj} onOpen={openFilm}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList