import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
export default class App extends Component {
 z
    render() {
        return (
            <div className="container">
                <Header updateApp={this.updateApp} />
                <List  {...this.state}/>
            </div>
        )
    }
    updateApp = (obj) => {
        this.setState(obj)
    }
    
}
