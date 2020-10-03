import React from 'react'
// import Styles from './ResultsSort.css'
import './ResultsSort.css'

function ResultsSort() {
    return (
        <div className = 'ResultsSort'>
        <div><p>SORT BY     </p></div>
            <div> 
            <div class="form_toggle">           
                <div className="form_toggle-item item-1">
                    <input id="fid-1" type="radio" name="radio" value="off" checked/>
                    <label for="fid-1">TITLE</label>
                </div>
                <div className="form_toggle-item item-2">
                    <input id="fid-2" type="radio" name="radio" value="on"/>
                    <label for="fid-2">GENRE</label>
                </div>
                </div>
            </div>           
    </div>
    )
}

export default ResultsSort