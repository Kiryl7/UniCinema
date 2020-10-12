import React, { Component } from "react";
import './App.css'
import HomePage from '../HomePage/HomePage'
import DescriptionPage from '../DescriptionPage/DescriptionPage'


class App extends Component {
    render() {
        return (
            <div>
               <DescriptionPage/>
            </div>
        );
    }
}

export default App