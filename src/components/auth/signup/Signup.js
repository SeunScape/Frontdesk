import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class Signup extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        c_password: '',
        // firstnameError: '',
        // lastnameError: '',
        // emailError: '',
        // passwordError: '',
        // c_passwordError: '',
    };
}
    onClick = e => {
        e.preventDefault();
        const data = {
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          email:this.state.email,
          password: this.state.password,
          c_password: this.state.c_password
    }
    // const isValid = this.validate();
    // if(isValid){
      axios.post('register', data)
      .then(res => {
          localStorage.setItem('token', res.data.data.token)
            const { history } = this.props;
              history.push("/dashboard")
          // console.log(res.data.data.token)
      })
      .catch(err => {

      })
    }
    // }
    // validate= () => {
    //   let firstnameError= '';
    //   let lastnameError= '';
    //   let emailError='';
    //   let passwordError='';
    //   let c_passwordError='';

    //   if (!this.state.firstname){
    //     firstnameError = 'please enter your firstname'
    //   }
    //   if (firstnameError){
    //     this.setState({firstnameError});
    //     return false;
    //   }
    //   if (!this.state.lastname){
    //     lastnameError = 'please enter your lastname'
    //   }
    //   if (lastnameError){
    //     this.setState({lastnameError});
    //     return false;
    //   }
    //   if (!this.state.email){
    //     emailError = 'please enter your email address'
    //   }
    //   if (!this.state.email.includes('@')){
    //     emailError = 'invalid email'
    //   }
    //   if (emailError){
    //     this.setState({emailError});
    //     return false;
    //   }
    //   if (!this.state.password){
    //     passwordError = 'please enter your password'
    //   }
    //   if (!this.state.password){
    //     passwordError = 'please enter your password'
    //   }
    //   if (!this.state.c_password){
    //     c_passwordError = 'confirm your password'
    //   }
    //   else if(this.state.password.length < 8) {
    //     passwordError = "password must be eight characters"
    //   }
    //   if (typeof this.state.password !== "undefined" && typeof this.state.c_password !== "undefined"){
    //     if(this.state.password !== this.state.c_password){
    //       passwordError = "passwords don't match"
    //     }
    //   }
    //   if (passwordError){
    //     this.setState({passwordError});
    //     return false;
    //   }
    //   if (c_passwordError){
    //     this.setState({c_passwordError});
    //     return false;
    //   }
    //   return true;
    // }
    onChange = e =>{
        this.setState({
              [e.target.name]:e.target.value
            })
    }
    render() {
        return (
            <div>
  <div id="app">
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div className="card card-primary">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" onSubmit={this.onClick} noValidate>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="frist_name">First Name</label>
                      <input id="frist_name" type="text" className="form-control" name="firstname" onChange={this.onChange} autofocus />
                      <div className="invalid-feedback">
                        What's your name?
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="last_name">Last Name</label>
                      <input id="last_name" type="text" className="form-control" name="lastname" onChange={this.onChange}/>
                      <div class="invalid-feedback">
                          What's your lastname?
                        </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" name="email" onChange={this.onChange} tabIndex={1} required autofocus/>
                    <div className="invalid-feedback">
                      Please fill in your email
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="password" className="d-block">Password</label>
                      <input id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator" name="password" onChange={this.onChange}/>
                      <div id="pwindicator" className="pwindicator">
                        <div className="bar" />
                        <div className="label" />
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="password2" className="d-block">Password Confirmation</label>
                      <input id="password2" type="password" className="form-control" name="c_password" onChange={this.onChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="agree" className="custom-control-input" id="agree" />
                      <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
                    </div>
                  </div>
                  <div className="form-group">
                    {/* <button type="submit" className="btn btn-primary btn-lg btn-block">
                      Register
                    </button> */}
                    <input type="submit" value="Register" className="btn btn-primary btn-lg btn-block" tabIndex={4}/>
                  </div>
                </form>
              </div>
              <div className="mb-4 text-muted text-center">
                Already Registered? <Link to='/login'>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

        )
    }
}
export default withRouter(Signup);