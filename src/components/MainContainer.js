import { Redirect, Route, Switch } from 'react-router-dom'
import FormPage from './FormPage'
import Preview from './Preview'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPersonData } from '../store/mainReducer'

class MainContainer extends Component {
    render () {
        return (
            <main className='main'>
                <Switch>
                    <Redirect exact from="/" to="/form"/>
                    <Route path="/form"
                           render={() => <FormPage {...this.props} />}/>
                    <Route path="/preview" render={() => <Preview personData={this.props.personData}/>}/>
                    <Route path="*" render={() => <div> 404 Not Found </div>}/>
                </Switch>
            </main>)
    }
}

const mapStateToProps = (state) => ({
    personData: state.personData.personData
})
export default connect(mapStateToProps, {
    setPersonData,

})(MainContainer)