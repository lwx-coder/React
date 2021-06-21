import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const { list,isFirst,isLoading,err } = this.props
        return (
            <div className="row">
            {
            
                isFirst? <h2>欢迎使用，请输入内容</h2>:
                isLoading?<h2>Loading...</h2>:
                err?<h2 style={{color:'red'}}>{err}</h2>:
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
}
