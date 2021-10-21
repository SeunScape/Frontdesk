import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {PrivateRoute} from './privateRoute';
import Staff from './components/Dashboard/Staff/Staff';
import CreateStaff from './components/Dashboard/Staff/CreateStaff/CreateStaff';
import Forgetpassword from './components/auth/Forgetpassword/Forgetpassword';
import Verify from './components/auth/Forgetpassword/verify';
import Reset from './components/auth/Forgetpassword/Reset';
import Viewstaff from './components/Dashboard/Staff/Viewstaff';

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
                    <Route path="/forgetpassword" component={Forgetpassword}/>
                    <Route path="/verify" component={Verify}/>
                    <Route path="/reset" component={Reset}/>
                    <PrivateRoute path="/viewstaff/:id" component={Viewstaff}/>
                    <PrivateRoute path="/staff" component={Staff}/>
                    <PrivateRoute path="/createstaff" component={CreateStaff}/>
                    <PrivateRoute path="/" component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;