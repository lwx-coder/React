import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Detail from './components/Detail'
import Home from './components/Home'
import Test from './components/Test'
import MyNavLink from './components/MyNavLink'

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
                            <MyNavLink to='/home' >home</MyNavLink>
                            <MyNavLink to='/detail' >detail</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/detail" component={Detail} />
                                    <Route path="/home" component={Home} />
                                    <Route path="/home" component={Test} />

                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
