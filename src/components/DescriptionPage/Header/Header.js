import React from 'react'
import styles from './Header.css'

function Header(props) {
    return (
        <div className={styles.tailTop}>
            <div className={styles.search}>
            <img src='../images/icons8.png' height='50' width='50' alt='Search' onClick={props.onClick}></img>                
            </div>
            <div className={styles.contentHeader}>
            <img src="../../../../../images/topgun.jpg" width="300" height="400" alt="Top Gun"></img>
                <div className={styles.descriptionContent}>
                    <div>
                        <p className={styles.header}>FIND YOUR MOVIE</p>
                    </div>
                    <p>Oscar winning movie</p>
                    <div className={styles.contentHeader}>
                        <p>1986   </p>
                        <p>110min</p>
                    </div>
                    <p>
                    Искусный пилот истребителя Ф-14, курсант элитного училища ВМС США, летающий как бог и руководимый как в жизни, так и в небе инстинктами, а не разумом, влюбляется в инструктора училища, астрофизика, которая долгое время отказывает ему во взаимности. Уступит ли она его белозубой улыбке?
                    </p>
                </div>
           </div>
        </div>
    )
}

export default Header