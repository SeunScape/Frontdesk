import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {PrivateRoute} from './privateRoute';
import Staff from './components/Dashboard/Staff/Staff';

class Routes extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/register" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/staff" component={Staff}/>
                    <PrivateRoute path="/" component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;