import React from 'react'
import styles from './MovieList.css'

function MovieList() {
    return (
        <div className={styles.indent1}>
            <ul className={styles.movieList}>
                <li className={styles.indent}>
                    <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"/>
                    <div className={styles.description}>
                        <b className={styles.rightB}>Top Gun</b>
                        <p>1994</p>
                    </div>                 
                    <p>Action</p>
                </li>
                <li className={styles.indent}>
                    <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"/>
                    <div className={styles.description}>
                        <b className={styles.rightB}>Top Gun</b>
                        <p>1994</p>
                    </div>
                    <p>Action</p>
                </li>
                <li className={styles.indent}>
                    <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"/>
                    <div className={styles.description}>
                        <b className={styles.rightB}>Top Gun</b>
                        <p>1994</p>
                    </div>
                    <p>Action</p>
                </li>
                <li className={styles.indent}>
                    <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"/>
                    <div className={styles.description}>
                        <b className={styles.rightB}>Top Gun</b>
                        <p>1994</p>
                    </div>
                    <p>Action</p>
                </li>
                <li className={styles.indent}>
                    <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"/>
                    <div className={styles.description}>
                        <b className={styles.rightB}>Top Gun</b>
                        <p>1994</p>
                    </div>
                    <p>Action</p>
                    </li>
                <li className={styles.indent}>
                    <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"/>
                    <div className={styles.description}>
                        <b className={styles.rightB}>Top Gun</b>
                        <p>1994</p>
                    </div>
                    <p>Action</p>
                </li>
            </ul>
        </div>
    )
}

export default MovieList