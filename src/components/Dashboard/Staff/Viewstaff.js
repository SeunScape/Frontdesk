import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideNavigation from '../SideNav/SideNavigation';
import axios from 'axios';

class Viewstaff extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        staff: []
    };
}
componentDidMount(){
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    };
    const rest = this.props.match.params.id;
   axios.get(`staff/${rest}`, config).then(
        res => {
            this.setState({
                staff:res.data.data,
            })
            // console.log(res.data)
        },
        err => {
        }
   )
} 


    render() {
        const {staff} = this.state
        return (
            <div className="main-wrapper main-wrapper-1">
                <Navbar/>
                <SideNavigation/>
                <div className="main-content">
                <section className="section">
                <div className="section-header">
                <h1>Posts</h1>
                <div className="section-header-button">
                    {/* <Link to="createstaff" className="btn btn-primary">Add New</Link> */}
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div className="breadcrumb-item"><a href="#">Other Pages</a></div>
                    <div className="breadcrumb-item">All Posts</div>
                </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mx-auto">
                    <div className="card author-box">
                        <div className="card-body">
                        <div className="author-box-center">
                            <img alt="image" src="/assets/img/users/user-1.png" className="rounded-circle author-box-picture" />
                            <div className="clearfix" />
                            <div className="author-box-name">
                            <h4>Name: {staff.name}</h4>
                            </div>
                            <div className="author-box-job">Position: {staff.position}</div>
                        </div>
                        <div className="text-center">
                            <div className="author-box-description">
                                <p><p>Salary: {staff.salary}</p></p>
                                <p>Position: {staff.position}</p>
                                <p>Phone: {staff.phone}</p>
                                <p>Start date: {staff.start_date}</p>
                                <p>Address: {staff.address}</p>
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

export default Viewstaff;
