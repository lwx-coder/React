import React, { Component } from 'react'
import propTypes from 'prop-types'
import {nanoid} from 'nanoid'

import './index.css'

export default class index extends Component {
    static propTypes={
        addTodo:propTypes.func.isRequired
    }
    render() {
        return (
            <div>
                  <input className='input' type="text"  placeholder="请输入你的任务名称，按回车键确认" onKeyDown={e => this.onKeyDownchange(e)} />
            </div>
        )
    }
   
    onKeyDownchange = (e) => {
        if (e.keyCode == 13) {
            if(e.target.value.trim()===''){
                alert('内容不能为空')
                return
            }
            const input = { id: nanoid(), name: e.target.value,done:false }
            this.props.addTodo(input) 
            e.target.value=''
        }
    }
}
