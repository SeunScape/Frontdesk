import React from 'react';
import VerificationInput from "react-verification-input";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Verify extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        email:'',
        code:''
    };
}
handleClick = e => {
    e.preventDefault();
    let formData = new FormData();    
  
    formData.append('email', this.state.email);   
    formData.append('token', this.state.code);
  
    axios({
        url: 'recover-password/verify',
        method: 'POST',
        data: formData
    })
    .then(
        res => {
        //   console.log(res)
          const { history } = this.props;
          history.push("/reset")
        }).catch(error => {
            
        })
}
    render() {
        return (
            <div>
                {/* <VerificationInput /> */}
                <div id="app">
                <section className="section">
                <div className="container mt-5">
                <div className="section-body">
                    <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="card">
                    <form className="needs-validation" onSubmit={this.handleClick} noValidate>
                        <div className="card-header">
                        <h4>Verify</h4>
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="text" className="form-control" name="email" onChange={this.handleChange} required />
                            <div className="invalid-feedback">
                            What's your Email?
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Input Code</label>
                            <input type="email" className="form-control" name="code" onChange={this.handleChange} required />
                            <div className="invalid-feedback">
                            Oh no! Code is invalid.
                            </div>
                        </div>
                        </div>
                        <div className="card-footer text-right">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>

                    </div>
                    </div>
                </div>
                </div>
                </section>
            </div>
            </div>
        );
    }
}
export default withRouter(Verify);