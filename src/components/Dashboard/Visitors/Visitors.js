import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import SideNavigation from '../SideNav/SideNavigation';
import axios from 'axios';



class Visitors extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: [],
            staff: [],
            name:'',
            email:'',
            occupation:'',
            note: '',
            phone:'',
            id: null,
            isLoading: false,
            isError: false,
        };
    }
    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
       axios.get('visitors', config).then(
            res => {
                this.setState({
                    users:res.data.data,
                    isLoading: false,
                })
                console.log( res.data.data)
            },
            err => {
                this.setState({isError: true, isLoading: false})
            }
       )
    } 
    
    selectUser = (id) => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.get(`visitors/${id}`, config).then(
            res => {
                this.setState({
                    staff:res.data.data,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    position: res.data.data.position,
                    phone: res.data.data.phone,
                    address: res.data.data.address,
                    salary: res.data.data.salary,
                    date: res.data.data.date,
                    id: res.data.data.id
                })
                console.log(res.data)
            },
            err => {
            }
        )
    }
    
    handleRowClick = (id) => {
        const { history } = this.props;
        history.push(`/viewvisitors/${id}`);
    }
    updateUser = () => {
        var id = this.state.id
        var item = {
            "name": this.state.name,
            "email": this.state.email,
            "occupation": this.state.occupation,
            "phone": this.state.phone,
        }
        console.warn("item",item)
        const { history } = this.props;
        fetch(`https://itfrontdesk.herokuapp.com/api/visitors/${id}`, {
          method: 'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          body:JSON.stringify(item)
        })
        .then(response => response.json())
        .then((responseJson) => history.push("/visitor"))
      .catch(error => console.log(error));
    }
    deleteUser = (id) => {
        fetch(`https://itfrontdesk.herokuapp.com/api/visitors/${id}`, {
          method: 'DELETE',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
        })
        .then(function(){
            window.location = "/visitor"
        })
        .then((responseJson) => console.log(responseJson))
      .catch(error => console.log(error));
      }
    renderTableRows = () => {
        return this.state.users.map(user => {
            return (
                <>
                <tr key={user.id}>  
                {/* <tr>    */}
                    <td  onClick={() => this.handleRowClick(user.id)}>{user.full_name}</td>
                    <td  onClick={() => this.handleRowClick(user.id)}>{user.email}</td>
                    <td  onClick={() => this.handleRowClick(user.id)}>{user.occupation}</td>
                    <td  onClick={() => this.handleRowClick(user.id)}>{user.phone}</td>
                    <td>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.selectUser(user.id)}>Update</button> &nbsp;
                        <button type="button" class="btn btn-dark" onClick={() => this.deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                </>
            )
        })
    }
    render() {
        const {users,isLoading, isError} = this.state
        return users.length > 0 
        ? (
            <div className="main-wrapper main-wrapper-1">
                <Navbar/>
                <SideNavigation/>
                <div className="main-content">
                <section className="section">
                <div className="section-header">
                <h1>Visitors</h1>
                <div className="section-header-button">
                    <Link to="createstaff" className="btn btn-primary">Add New</Link>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div className="breadcrumb-item"><a href="#">Other Visitors</a></div>
                    <div className="breadcrumb-item">All Visitors</div>
                </div>
                </div>
                    <div className="section-body">
                    <div className="row">
                        <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h4>Simple</h4>
                            </div>
                            <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Occupation</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.renderTableRows()}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="formModal" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="formModal">Edit staff</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form className>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className="fas fa-user" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="text" className="form-control" value={this.state.name} onChange= {(e) => {this.setState({name: e.target.value})}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className="fas fa-envelope" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="text" className="form-control" value={this.state.email} onChange= {(e) => {this.setState({email: e.target.value})}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className ="fas fa-phone" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="tel" className="form-control" value={this.state.phone} onChange= {(e) => {this.setState({phone: e.target.value})}}/>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary m-t-15 waves-effect"  onClick={this.updateUser}>Update</button>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                </div>

            </div>
        ):(
            <div className="main-wrapper main-wrapper-1">
            <Navbar/>
            <SideNavigation/>
            <div className="main-content">
                <section className="section">
                <div className="section-header">
                <h1>Posts</h1>
                <div className="section-header-button">
                    <Link to="createstaff" className="btn btn-primary">Add New</Link>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div className="breadcrumb-item"><a href="#">Other Pages</a></div>
                    <div className="breadcrumb-item">All Posts</div>
                </div>
                </div>

                <div className="container mt-5">
                    <div className="page-error">
                    <div className="page-inner">
                        <h1>No Users</h1>
                        <div className="page-description">
                        Create users from the create Visitors button
                        </div>
                        <div className="page-search">
                        <div className="mt-3">
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
export default withRouter(Visitors);

