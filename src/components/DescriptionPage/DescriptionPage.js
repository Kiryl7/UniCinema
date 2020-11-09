import React from 'react'
import styles from './DescriptionPage.css'
import Header from './Header/Header'
import MidleContainer from './MidleContainer/MidleContainer'
import Body from './Body/Body'

function DescriptionPage(props) {
    return (
        <div>
            <Header onClick={props.onClick}/> <MidleContainer/> <Body/>
        </div>
    )
}

export default DescriptionPage