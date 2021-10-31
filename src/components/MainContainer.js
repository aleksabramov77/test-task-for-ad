import { Redirect, Route, Switch } from 'react-router-dom'
import FormPage from './FormPage'
import Preview from './Preview'
import React from 'react'
import { useSelector } from 'react-redux'


function MainContainer () {
    const personData = useSelector(store => store.personData.personData)
    return (
        <main className='main'>
            <Switch>
                <Redirect exact from="/" to="/form"/>
                <Route path="/form"
                       render={() => <FormPage personData={personData}/>}/>
                <Route path="/preview" render={() => <Preview personData={personData}/>}/>
                <Route path="*" render={() => <div> 404 Not Found </div>}/>
            </Switch>
        </main>)
}

export default MainContainer



