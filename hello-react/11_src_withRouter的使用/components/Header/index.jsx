import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.back}>回退</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
    forward = () => {
        this.props.history.goForward()
    }
    back = () => {
        this.props.history.goBack()
    }
    go = () => {
        this.props.history.go(0)
    }
}
export default withRouter(Header)
