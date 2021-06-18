import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
export default class App extends Component {
    state={list:[]}
    render() {
        const { list } = this.state
        return (
            <div className="container">
                <Header search={this.search} />
                <List  list={list}/>
            </div>
        )
    }
    search = (val) => {
        this.setState({list:val})
    }
    
}
