import React, { Component } from 'react'
import propTypes from 'prop-types'

import './index.css'

export default class index extends Component {
    static propTypes = {
    }
    render() {
        const { list } = this.props
        const num=list.reduce((pre,item)=>pre+(item.done?1:0),0)
        const total=list.length
        return (
            <div className="todo-foot">
                <div>
                    <input type="checkbox" name="item" onChange={this.allCheck} checked={num===total&&total!==0} />已完成{num} /全部{total}
                </div>
                <button onClick={this.clearAll}>清除已完成任务</button>
            </div>
        )
    }
    clearAll = () => {
        this.props.clearAll()
        
        
     
    }
    
 
    allCheck = (e) => {
        this.props.allCheck(e.target.checked)
    }

}
