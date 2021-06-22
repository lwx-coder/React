import React, { Component } from 'react'
import Router from './router/router';

import './App.css'
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
                            <span   className="list-group-item">Detail</span>
                            <span   className="list-group-item active">Home</span>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Router />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
