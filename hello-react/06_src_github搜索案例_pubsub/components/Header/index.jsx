import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

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
        PubSub.publish('MY TOPIC',{isFirst:false,isLoading:true});
        axios.get('/api1/search/users',{
            params:{
                q:a
            }
        }).then(
            res=>{
                PubSub.publish('MY TOPIC',{isLoading:false,list:res.data.items});
            },
            err=>{
                PubSub.publish('MY TOPIC',{isLoading:false,err:err.message});
            }
        )
    }
    
}
