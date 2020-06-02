import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'

export default class App extends Component {
    state = { language : 'english'}

    clickHandlerUs = () =>{
        this.setState({ language: 'english'})
    }

    clickHandlerDe = () =>{
        this.setState({ language: 'german'})
    }

    render() {
        return (
            <div className="ui container">
                <div>Select a language:
                    <i className="flag us" onClick={this.clickHandlerUs}></i>
                    <i className="flag de" onClick={this.clickHandlerDe}></i>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </div>
        )
    }
}
