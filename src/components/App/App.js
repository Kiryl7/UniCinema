import React, { Component } from "react";
import './App.css'
import Search from '../HomePage/Search/Search.js'

class App extends Component {
    render() {
        return (
            <div className = "tail-top"> 
                <div className = "tail-bottom">
                    <Search/>
                </div>
            </div>
        );
    }
}

export default App