import './scss/App.scss'
import Header from './components/Header'
import React  from 'react'
import {
    // BrowserRouter,
    HashRouter } from 'react-router-dom'
import Footer from './components/Footer'
import store from './store/store'
import { Provider } from 'react-redux'
import MainContainer from './components/MainContainer'

const App = () => {

    return (
        <div className="App">
{/* Из-за особенностей хостинга GitHub-Pages BrowserRouter пришлось заменить на HashRouter */}
            {/*<BrowserRouter>*/}
                <HashRouter>
                <Header/>
                <Provider store={store}>
                    <MainContainer/>
                </Provider>
                <Footer/>
                </HashRouter>
            {/*</BrowserRouter>*/}
        </div>
    )
}

export default App
