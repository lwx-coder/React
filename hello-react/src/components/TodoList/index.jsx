import React, { Component } from 'react';
import './index.css'

class index extends Component {
    state={
        list:[{
            id:1,name:'吃饭'
        },{
            id:2,name:'睡觉'
        },{
            id:3,name:'打豆豆'
        }]
    }
    render() {
        return (
            <div className="todolist">
              <div>
              <input type="text" ref={c=>this.input=c} placeholder="请输入你的任务名称，按回车键确认"  onKeyDown={e=>this.onKeyDownchange(e)}/>
               <ul>
               {
                    this.state.list.map(item=>{
                        return <li key={item.id}>{item.name}</li>
                    }
                    )
                }
               </ul>
              </div>
                
            </div>
        );
    }
    onKeyDownchange(e){
        const { list } = this.state
        if(e.keyCode==13){
            const input={id:list.length+1,name:this.input.value}
            this.setState({list:[input,...list]})
        }
    }
}

export default index;