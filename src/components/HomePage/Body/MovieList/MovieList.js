import React from 'react'
import styles from './MovieList.css'
import MovieItem from './MovieItem'

const array = [
    {
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun',
        name: 'Top Gun',
        ganre: 'Action',
        id: 1
    },
    {
        img: '../../../../../images/terminator.jpg',
        age: 1984,
        title: 'Terminator',
        name: 'Terminator',
        ganre: 'Science fiction/Action',
        id: 2
    },
    {
        img: '../../../../../images/Blue_Velvet.jpg',
        age: 1986,
        title: 'Blue Velvet',
        name: 'Blue Velvet',
        ganre: 'Detective film/Thriller',
        id: 3
    },
    {
        img: '../../../../../images/Vanishing_Point.jfif',
        age: 1971,
        title: 'Vanishing Point',
        name: 'Vanishing Point',
        ganre: 'Action / Cult Movie',
        id: 4
    },
    {
        img: '../../../../../images/Death_Proof.jpg',
        age: 2007,
        title: 'Death Proof',
        name: 'Death Proof',
        ganre: 'Action/Horror',
        id: 5
    },
    {
        img: '../../../../../images/Lincoln_Lawyer.jpg',
        age: 2011,
        title: 'Lincoln Lawyer',
        name: 'Lincoln Lawyer',
        ganre: 'Thriller/Crime',
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