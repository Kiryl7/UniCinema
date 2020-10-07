import React from 'react'
import ResultsCount from './ResultsCount/ResultsCount'
import ResultsSort from './ResultsSort/ResultsSort'

import styles from './MidleContainer.css'

function MidleContainer() {
    return (
        <div className={styles.midleLine}>
            <ResultsCount/> <ResultsSort/>
        </div>
    )
}

export default MidleContainer