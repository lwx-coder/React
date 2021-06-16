import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    state = { num: -1 }
    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.list.map((item, i) => {
                        return <li key={item.id} onMouseEnter={e => this.hover(i, e)} className={this.state.num === i ? 'active' : ''}>
                            <input type="checkbox" name="item" onChange={e=>this.change(i)}/>
                            <label>{item.name}</label>
                            <button onClick={e => this.del(i, e)}>删除</button>
                        </li>
                    }
                    )
                }
            </ul>

        )
    }
    change = (i) => {
        this.props.change(i)
        
    }
    hover = (i) => {
        const { num } = this.state
        this.setState({ num: i })
    }

    del = (i) => {
        this.props.delTodo(i)
        this.setState()
        
    }


}
