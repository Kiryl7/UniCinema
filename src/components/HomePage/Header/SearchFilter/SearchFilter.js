import React from "react"
import styles from './SearchFilter.css'
import classNames from 'classnames'

function SearchFilter() {
    return(
        <div className={styles.searchFilter}>
            <p>SEARCH BY     </p>
                <div> 
                    <div className={styles.form_toggle}>           
                    <div className={classNames(styles.form_toggle_item, styles.item_1)}>
                        <input id="fid_1" type="radio" name="radio" value="off" checked/>
                        <label for="fid_1">TITLE</label>
                    </div>
                    <div className={classNames(styles.form_toggle_item, styles.item_2)}>
                        <input id="fid_2" type="radio" name="radio" value="on"/>
                        <label for="fid_2">GENRE</label>
                    </div>
                    </div>
                </div>           
        </div>
    )
}

export default SearchFilter