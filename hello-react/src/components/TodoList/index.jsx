import React, { Component } from 'react';
import './index.css'
import Header from '../Header'
import List from '../List'
import Footer from '../Footer'

class index extends Component {
    state = {
        list: [{
            id: 1, name: '吃饭',done:false
        }, {
            id: 2, name: '睡觉',done:false
        }, {
            id: 3, name: '打豆豆',done:false
        }],
    }

    render() {
        return (
            <div className="todolist">
                <div>
                    <Header  addTodo={this.addTodo} />
                    <List list={this.state.list} delTodo={this.delTodo} change={this.change}/>
                    <Footer list={this.state.list}/>
                </div>

            </div>
        );
    }
    change = (i) => {
        let a=this.state.list[i].done
        this.setState({a:!a})

    }
    delTodo = (i) => {
        console.log('delTodo',i)
    }
    addTodo = (todoobj) => {
        const { list } = this.state
        this.setState({list:[todoobj,...list]})
    }
  
   
    
  
    


}

export default index;