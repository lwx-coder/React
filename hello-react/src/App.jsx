import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home'
import Detail from './pages/Detail'
import MyNavLink from './components/MyNavLink'
=======
import Detail from './components/Detail'
import Home from './components/Home'
import MyNavLink from './components/MyNavLink'

>>>>>>> f829cc62e69fb838c6e5e1cda3e4aa991e36db91
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
<<<<<<< HEAD
                            <MyNavLink to="/detail">detail</MyNavLink>
                            <MyNavLink to="/home">home</MyNavLink>
=======
                            <MyNavLink to='/home' >home</MyNavLink>
                            <MyNavLink to='/detail' >detail</MyNavLink>
>>>>>>> f829cc62e69fb838c6e5e1cda3e4aa991e36db91
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
<<<<<<< HEAD
                                    <Route  path="/home" component={Home} />
                                    <Route  path="/detail" component={Detail} />
                                    <Redirect to="/detail" />
                                </Switch>
=======
                                    <Route exact path="/detail" component={Detail} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/detail"/>
                                    {/* <Route path="/home" component={Test} /> */}

                                </Switch>

>>>>>>> f829cc62e69fb838c6e5e1cda3e4aa991e36db91
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
