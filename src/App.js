import './scss/App.scss'
import Header from './components/Header'
import React  from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import store from './store/store'
import { Provider } from 'react-redux'
import MainContainer from './components/MainContainer'

const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Provider store={store}>
                    <MainContainer/>
                </Provider>
                <Footer/>

            </BrowserRouter>

        </div>
    )
}

export default App
