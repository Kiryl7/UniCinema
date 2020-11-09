import React, {useState} from "react";
import './App.css'
import HomePage from '../HomePage/HomePage'
import DescriptionPage from '../DescriptionPage/DescriptionPage'


function App() {

    const  [action, setAction] = useState(true)

    const touggleAction = () => {
        setAction(!action)
    }

        return (
            <div>   
            {action ? <HomePage onClick={touggleAction}/> : <DescriptionPage onClick={touggleAction}/>}
            </div>
        );
    }

export default App