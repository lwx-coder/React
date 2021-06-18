import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const { list } = this.props
        return (
            <div className="row">
            {
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
