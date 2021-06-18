import React, { Component } from 'react';
import './index.css'
import Header from '../Header'
import List from '../List'
import Footer from '../Footer'

class index extends Component {
    state = {
        list: [{
            id: 1, name: '吃饭', done: false
        }, {
            id: 2, name: '睡觉', done: false
        }, {
            id: 3, name: '打豆豆', done: false
        }],
    }

    render() {
        const { list } = this.state
        return (
            <div className="todolist">
                <div>
                    <Header addTodo={this.addTodo} />
                    <ul className="todo-main">
                        {
                            list.map((item) => {
                                return <List {...item} key={item.id} updateTodo={this.updateTodo} delTodo={this.delTodo} />
                            })
                        }
                    </ul>
                    <Footer list={list} allCheck={this.allCheck}  clearAll={this.clearAll}/>
                </div>

            </div>
        );
    }
    clearAll = () => {
        const { list } = this.state
        const list1=list.filter(item=>!item.done)
        console.log(list1);
        if(list1.length==list.length){
            alert('尚未勾选')
            return 
        }
        if(window.confirm('确认清除已完成任务嘛？')){
            this.setState({list:list1})
        }
    }
    
    allCheck = (flag) => {
        const { list } = this.state
        const list1=list.map(item=>{
            return {...item,done:flag}
        })
        this.setState({list:list1})
       
    }

    delTodo = (id) => {
        const { list } = this.state
        if(window.confirm('确认删除吗？')){
            const list1 = list.filter(item =>item.id !== id)
            console.log(id);
            this.setState({ list: list1 })
        }
      



    }
    updateTodo = (id, done) => {
        const { list } = this.state
        const list1 = list.map(item => {
            if (item.id === id) return { ...item, done: done }
            else return item
        })
        this.setState({ list: list1 })


    }
    addTodo = (todoobj) => {
        const { list } = this.state
        this.setState({ list: [todoobj, ...list] })
    }







}

export default index;