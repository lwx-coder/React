import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    state = { mouse: false }
    render() {
        const { mouse } = this.state
        const { list } = this.props
        return (
            <li onMouseEnter={this.onmouse(true)} onMouseLeave={this.onmouse(false)} style={{ 'backgroundColor': mouse ? 'pink' : '' }}>
                <input type="checkbox" name="item" />
                <label>{list.name}</label>
                <button  style={{ 'display': mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )

    }
    onmouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

}
