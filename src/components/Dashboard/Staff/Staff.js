import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import SideNavigation from '../SideNav/SideNavigation';
import axios from 'axios';


class Staff extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        users: [],
        staff: [],
        name:'',
        email:'',
        position:'',
        phone: '',
        address:'',
        salary:'',
        date:'',
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
   axios.get('staff', config).then(
        res => {
            this.setState({
                users:res.data.data,
                isLoading: false,
                name: res.data.data[0].name,
                email: res.data.data[0].email,
                position: res.data.data[0].position,
                phone: res.data.data[0].phone,
                address: res.data.data[0].address,
                salary: res.data.data[0].salary,
                date: res.data.data[0].date,
                id: res.data.data[0].id,
            })
            // console.log( res.data.data[0].name)
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
    axios.get(`staff/${id}`, config).then(
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
            // console.log(res.data)
        },
        err => {
        }
    )
}

handleRowClick = (id) => {
    const { history } = this.props;
    history.push(`/viewstaff/${id}`);
}
updateUser = () => {
    var id = this.state.id
    var item = {
        "name": this.state.name,
        "email": this.state.email,
        "position": this.state.position,
        "phone": this.state.phone,
        "address": this.state.address,
        "salary": this.state.salary,
        "start_date": this.state.date
    }
    console.warn("item",item)
    fetch(`https://itfrontdesk.herokuapp.com/api/staff/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body:JSON.stringify(item)
    })
    .then(response => response.json())
    .then((responseJson) => console.log(responseJson))
  .catch(error => console.log(error));
}
renderTableRows = () => {
    return this.state.users.map(user => {
        return (
            <>
            {/* <tr key={user.id} onClick={() => this.handleRowClick(user.id)}>   */}
            <tr>   
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.position}</td>
                <td>{user.address}</td>
                <td>{user.salary}</td>
                <td>{user.start_date}</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.selectUser(user.id)}>Update</button></td>
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
                                    <th scope="col">Phone</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Start date</th>
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
                                            <div className="form-group">
                                                <label>Position</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className="fas fa-address-card" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="text" className="form-control" value= {this.state.position} onChange= {(e) => {this.setState({position: e.target.value})}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className="fas fa-address-book" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="text" className="form-control" value={this.state.address} onChange= {(e) => {this.setState({address: e.target.value})}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Salary</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className="fas fa-money-bill" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="text" className="form-control" value={this.state.salary} onChange= {(e) => {this.setState({salary: e.target.value})}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Start date</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <i className="fas fa-calendar-week" />
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" placeholder="Email" name="email" /> */}
                                                <input type="date" className="form-control" value={this.state.date} onChange= {(e) => {this.setState({date: e.target.value})}}/>
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
                        Create users from the create staff button
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
export default withRouter(Staff);

