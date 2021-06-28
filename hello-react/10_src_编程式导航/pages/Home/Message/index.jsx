import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import About from './About'

export default class Message extends Component {
    state = {
        list: [
            { id: 1, title: '消息1' },
            { id: 2, title: '消息2' },
            { id: 3, title: '消息3' },
        ]
    }
    render() {
        return (
            <div style={{ 'marginTop': '20px' }}>
                <ul>
                    {
                        this.state.list.map(item => {
                            return <li key={item.id}>
                                {/* 传递params参数 */}
                                {/* <Link to={`/home/message/about?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                                <Link to={{ pathname: '/home/message/about', state: { id: item.id, title: item.title } }}>{item.title}</Link>
                          &nbsp; &nbsp; <button onClick={()=>this.viewpush(item.id,item.title)}>push查看</button>
                          &nbsp;&nbsp; <button onClick={()=>this.viewreplace(item.id,item.title)}>replace查看</button>
                            </li>
                        })
                    }
                </ul>
                <Route path="/home/message/about" component={About} />
            </div>
        )
    }
    viewpush = (id,title) => {
        this.props.history.push(`/home/message/about`,{id,title})
    }
    viewreplace = (id,title) => {
        this.props.history.replace(`/home/message/about`,{id,title})
    }
    
    
}
