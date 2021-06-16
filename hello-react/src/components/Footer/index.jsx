import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        return (
                <div className="todo-foot">
                    <div>
                    <input type="checkbox" name="item" />已完成{this.props.list.filter(item=>item.done).length} /全部{this.props.list.length}
                    </div>
                    <button>清除已完成任务</button>
                </div>
        )
    }
}
