import React, { Component } from 'react'
import propTypes from 'prop-types'

import './index.css'

export default class index extends Component {
    static propTypes = {
        delTodo: propTypes.func.isRequired,
        updateTodo: propTypes.func.isRequired,

    }
    state = { mouse: false }
    render() {
        const { mouse  } = this.state
        const { id, name,done } = this.props
        return (
            <li onMouseEnter={this.onmouse(true)} onMouseLeave={this.onmouse(false)} style={{ 'backgroundColor': mouse ? 'pink' : '' }}>
                <input type="checkbox" name="item" checked={done} onChange={this.updateTodo(id)} />
                <label>{name}</label>
                <button style={{ 'display': mouse ? 'block' : 'none' }} onClick={() => this.delTodo(id)}>删除</button>
            </li>
        )
    }
   
    
  
    delTodo = (id) => {
        this.props.delTodo(id)
    }
    updateTodo = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked)

        }
    }
    onmouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

}
