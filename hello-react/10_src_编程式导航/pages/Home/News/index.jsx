import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div>
                news222
            </div>
        )
    }
    componentDidMount(){
      this.timer =setTimeout(() => {
            this.props.history.push('/home/message')

        }, 1000*2);
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
}
