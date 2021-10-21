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
            })
            // console.log(res.data)
        },
        err => {
            this.setState({isError: true, isLoading: false})
        }
   )
} 
// const navigate = (id) => {
//     history.push(`/workspace/${id}`)
// }
handleRowClick = (id) => {
    const { history } = this.props;
    history.push(`/viewstaff/${id}`);
}
renderTableRows = () => {
    return this.state.users.map(user => {
        return (
            <tr key={user.id} onClick={() => this.handleRowClick(user.id)}>  
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.position}</td>
                <td>{user.address}</td>
                <td>{user.salary}</td>
                <td>{user.start_date}</td>
            </tr>
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

