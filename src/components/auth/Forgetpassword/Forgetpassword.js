import React from 'react';
import axios from 'axios'

class Forgetpassword extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        email: ''
    };
}
handleEmailClick = e => {
    e.preventDefault();
    let formData = new FormData();    
  
    formData.append('email', this.state.email);   
  
    axios({
        url: 'recover-password',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Content-Type': 'application/json',
        },
        data: formData
    })
    .then(
        res => {
          console.log(res)
        }).catch(error => {
            
        })
  }
  handleEmailChange = e =>{
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
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="card card-primary">
                            <div className="card-header">
                            <h4>Forgot Password</h4>
                            </div>
                            <div className="card-body">
                            <p className="text-muted">We will send a link to reset your password</p>
                            <form method="POST" onSubmit={this.handleEmailClick}>
                                <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" className="form-control" name="email" tabIndex={1} onChange={this.handleEmailChange} required autofocus />
                                </div>
                                <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                                    Forgot Password
                                </button>
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
export default Forgetpassword;