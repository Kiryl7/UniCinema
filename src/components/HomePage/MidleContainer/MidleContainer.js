import React from 'react'
import ResultsCount from './ResultsCount/ResultsCount'
import ResultsSort from './ResultsSort/ResultsSort'

import './MidleContainer.css'

function MidleContainer() {
    return (
        <div className = 'midle-line'>
            <ResultsCount/> <ResultsSort/>
        </div>
    )
}

export default MidleContainer