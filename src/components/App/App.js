import React, {useState} from "react";
import './App.css'
import HomePage from '../HomePage/HomePage'
import DescriptionPage from '../DescriptionPage/DescriptionPage'
//Покрыть функционал(отоброжение фильмов) JEST тестами
//Покрыть всё приложение end to end тестами (cypress)

function App() {

    const [film, setFilm] = useState(null) 

    const touggleAction = (obj) => {
        //setAction(!action) 
        setFilm(obj)

        
    }
        return (
            <div>   
                {film ? <DescriptionPage onClick={touggleAction} obj={film}/> : <HomePage onClick={touggleAction}/>} 
            </div>
        );
    }

export default App