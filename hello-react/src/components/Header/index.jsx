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
        axios.get('/api1/search/users2',{
            params:{
                q:a
            }
        }).then(
            res=>{
                console.log(res.data.items);
                this.props.search(res.data.items)
            },
            err=>{console.log(err);}
        )
    }
    
}
