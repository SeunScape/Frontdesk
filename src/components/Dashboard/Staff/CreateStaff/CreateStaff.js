import React from 'react';
import Navbar from '../../Navbar/Navbar';
import SideNavigation from '../../SideNav/SideNavigation';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class CreateStaff extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        phone:'',
        position:'',
        address: '',
        salary: 0,
        date: ''
    };
}
handleItemClick =e =>{
    e.preventDefault();

    const formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email',this.state.email);
        formData.append('phone',this.state.phone);
        formData.append('position',this.state.position);
        formData.append('address',this.state.address);
        formData.append('salary',this.state.salary);
        formData.append('start_date',this.state.date);
        axios({
            url: 'staff',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                // 'Content-Type': 'application/json',
            },
            data: formData
        })
        .then(
            res => {
                const { history } = this.props;
                history.push("/staff")
            }).catch(error => {
                
            })
}
handleItemChange = e =>{
    this.setState({
          [e.target.name]:e.target.value
        })
  }
    render() {
        return (
            <div>
                <div id="app">
                    <div className="main-wrapper main-wrapper-1">
                        <SideNavigation/>
                        <Navbar/>
                        <div class="main-content">
                        <section className="section">
                        <div className="section-header">
                            <div className="section-header-back">
                            <a href="posts.html" className="btn btn-icon"><i className="fas fa-arrow-left" /></a>
                            </div>
                            <h1>Create New Post</h1>
                            <div className="section-header-breadcrumb">
                            <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                            <div className="breadcrumb-item"><a href="#">Posts</a></div>
                            <div className="breadcrumb-item">Create New Post</div>
                            </div>
                        </div>
                        <div className="section-body">
                            <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-header">
                                    <h4>Write Your Post</h4>
                                </div>
                                <div className="card-body">
                                <form className="needs-validation" onSubmit={this.handleItemClick} noValidate>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Name</label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" name="name" onChange={this.handleItemChange}/>
                                        <div class="invalid-feedback">
                                            Please fill in the name
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Email</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="email" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the email
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Address</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="address" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the Address
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Salary</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="salary" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the Salary
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Phone</label>
                                    <div class="col-sm-12 col-md-7">
                                    <input type="tel" className="form-control" name="phone" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the phone number
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Position</label>
                                    <div className="col-sm-12 col-md-7">
                                    <input type="text" className="form-control" name="position" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the position
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Start Date</label>
                                    <div className="col-sm-12 col-md-7">
                                    <input type="date" className="form-control" name="date" onChange={this.handleItemChange}/>
                                    <div class="invalid-feedback">
                                        Please fill in the start date
                                    </div>
                                    </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
                                    <div className="col-sm-12 col-md-7">
                                        <button className="btn btn-primary">Create Post</button>
                                    </div>
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
                </div>
            </div>
        ) 
    }
}
export default withRouter(CreateStaff);