import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
    render() {
        return (
            <div>
                    <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search" ref={c=>this.input=c}  />&nbsp;<button onClick={this.search}>Search</button>
                    </div>
                </section>
                
            </div>
        )
    }
    search = () => {
        const {input:{value:a}}=this
        // const {isFirst,isLoading,err} = this.props
        this.props.updateApp({isFirst:false,isLoading:true})
        axios.get('/api1/search/users',{
            params:{
                q:a
            }
        }).then(
            res=>{
                this.props.updateApp({isLoading:false,list:res.data.items})
            },
            err=>{
                this.props.updateApp({isLoading:false,err:err.message})
            }
        )
    }
    
}
