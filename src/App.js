import './App.css'
import Header from './components/Header/Header'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function App () {
    return (
        <div className="App">
            <BrowserRouter>

                <Header/>
            </BrowserRouter>

        </div>
    )
}

export default App
