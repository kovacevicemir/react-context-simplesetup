import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext'

export default class Button extends Component {

    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Ja'}
                </LanguageContext.Consumer>
            </button>
        )
    }
}
