import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class Login extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
}

handleClick = e => {
  e.preventDefault();
  let formData = new FormData();    

  formData.append('email', this.state.email);   
  formData.append('password', this.state.password);


axios.post('login', formData)
.then(res => {
  localStorage.setItem('token', res.data.data.token)
      const { history } = this.props;
        history.push("/dashboard")
})
.catch(err => {

})
}
handleChange = e =>{
  this.setState({
        [e.target.name]:e.target.value
      })
}
    render() {
        return (
<div id="app">
  <section className="section">
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <div className="card card-primary">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form className="needs-validation" onSubmit={this.handleClick} noValidate>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-control" name="email" tabIndex={1} onChange={this.handleChange} required autofocus/>
                  <div className="invalid-feedback">
                    Please fill in your email
                  </div>
                </div>
                <div className="form-group">
                  <div className="d-block">
                    <label htmlFor="password" className="control-label">Password</label>
                    <div className="float-right">
                      <Link to="forgetpassword" className="text-small">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <input id="password" type="password" className="form-control" name="password" tabIndex={2} onChange={this.handleChange} required />
                  <div className="invalid-feedback">
                    please fill in your password
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                    <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                  </div>
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-primary btn-lg btn-block" tabIndex={4}/>
                </div>
              </form>
              <div className="text-center mt-4 mb-3">
                <div className="text-job text-muted">Login With Social</div>
              </div>
              <div className="row sm-gutters">
                <div className="col-6">
                  <a className="btn btn-block btn-social btn-facebook">
                    <span className="fab fa-facebook" /> Facebook
                  </a>
                </div>
                <div className="col-6">
                  <a className="btn btn-block btn-social btn-twitter">
                    <span className="fab fa-twitter" /> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-muted text-center">
            Don't have an account? <Link to='/register'>Create one</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


        )
    }
}

export default withRouter(Login);