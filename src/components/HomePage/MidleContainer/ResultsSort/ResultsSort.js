import React from 'react'
import styles from '../../Header/SearchFilter/SearchFilter.css'
import classNames from 'classnames'

function ResultsSort() {
    return (
        <div className={styles.resultsSort}>
            <div><p>SORT BY     </p></div>
            <div> 
                <div className={styles.form_toggle}>           
                <div className={classNames(styles.form_toggle_item, styles.item_1)}>
                    <input id="fid_3" type="radio" name="radio1" value="off" defaultChecked={true}/>
                    <label htmlFor="fid_3">TITLE</label>
                </div>
                <div className={classNames(styles.form_toggle_item, styles.item_2)}>
                    <input id="fid_4" type="radio" name="radio1" value="on"/>
                    <label htmlFor="fid_4">GENRE</label>
                </div>
                </div>
            </div>           
        </div>
    )
}

export default ResultsSort