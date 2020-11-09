import React from 'react'
import Header from './Header/Header'
import MidleContainer from './MidleContainer/MidleContainer'
import Body from './Body/Body'

import './HomePage.css'

function HomePage(props) {
    return (
        <div>
             <Header/> <MidleContainer/> <Body onClick={props.onClick}/>
        </div>
    )
}

export default HomePage