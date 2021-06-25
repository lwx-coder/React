import React, { Component } from 'react'
import qs from 'querystring'

export default class About extends Component {
    state = {
        content: [
            { id: 1, content: 'char' },
            { id: 2, content: 'kate' },
            { id: 3, content: 'nano' },
        ]
    }
    render() {
        // const { match: { params: { id, title } } } = this.props
        // const { search } = this.props.location
        // const {id,title}=qs.parse(search.slice(1))
        const {id,title}=this.props.location.state
        console.log(this.props.location.state);
        return (
            <div>
                <p> ID:{id}</p>
                <p> TITLE:{title}</p>
                <p>CONTENT:{
                    this.state.content.find(item => item.id === id).content
                }</p>
            </div>
        )
    }
}
