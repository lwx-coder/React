import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Detail from './components/Detail'
import Home from './components/Home'

export default class App extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/detail">Detail</NavLink>
                            <NavLink activeClassName="atguigu" className="list-group-item " to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/detail" component={Detail} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
