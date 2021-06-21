import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class index extends Component {
    state = {
        list: [],
        isFirst: true,
        isLoading: false,
        err: '',
    }
    render() {
        const { list, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入内容</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                list.map(item => {
                                    return <div className="card" key={item.id}>
                                        <a href="https://github.com/reactjs" >
                                            <img src={item.avatar_url} style={{ width: '100px' }} alt="" />
                                        </a>
                                        <p className="card-text">{item.login}</p>
                                    </div>
                                })
                }
            </div>
        )
    }
    componentDidMount() {
        this.token= PubSub.subscribe('MY TOPIC', (msg, data) => {
            this.setState(data)
        })
    }
    componentWillMount() {
        PubSub.unsubscribe(this.token);
    }
    
}
