import React, { Component } from 'react'
import axios from  'axios'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={this.getstudens}>getstudens</button>
                <button onClick={this.getcars}>getcars</button>
            </div>
        )
    }
    getstudens = () => {
        axios.get('/api1/students').then(
            response=>{console.log(response)},
            error=>{console.log(error)}
        )
    }
    getcars = () => {
        axios.get('/api2/cars').then(
            response=>{console.log(response)},
            error=>{console.log(error)}
        )
    }
 
    
}
