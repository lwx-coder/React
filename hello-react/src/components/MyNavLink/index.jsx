<<<<<<< HEAD
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                 <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}></NavLink>
            </div>
        )
    }
}
=======
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MyNavLink extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}></NavLink>
            </div>
        );
    }
}

export default MyNavLink;
>>>>>>> f829cc62e69fb838c6e5e1cda3e4aa991e36db91
