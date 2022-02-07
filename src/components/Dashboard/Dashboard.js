import React from 'react';
import Navbar from './Navbar/Navbar';
import SideNavigation from './SideNav/SideNavigation';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom'
class Dashboard extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      users: [],
        visitors: [],
        count: 0,
        vcount:0,
        isLoading: true,
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
              isLoading: false
          })
          // console.log( res.data.data)
      },
      err => {
          this.setState({isError: true, isLoading: true})
      }
 )
 axios.get('visitors', config).then(
  res => {
      this.setState({
          visitors:res.data.data,
          isLoading: false,
      })
  },
  err => {
      this.setState({isError: true, isLoading: true})
  }
)
 axios.get('staff/count', config).then(
      res => {
          this.setState({
              count: res.data.data,
              isLoading: false,
          })
          // console.log( res.data.data)
      },
      err => {
          this.setState({isError: true, isLoading: true})
      }
 )
 axios.get('visitors/count', config).then(
  res => {
    this.setState({
        vcount: res.data.data,
        isLoading: false,
    })
    console.log( res.data.data)
},
err => {
    this.setState({isError: true, isLoading: true})
}
)
    }
renderTableRows = () => {
  return this.state.users.map(user => {
      return (
          <>
          <tr key={user.id}>  
          {/* <tr>    */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.position}</td>
              <td>{user.address}</td>
              <td>{user.salary}</td>
              <td>{user.start_date}</td>
          </tr>
          </>
      )
  })
}
renderFuckingRows = () => {
  return this.state.visitors.map(visitor => {
      return (
          <>
          <tr key={visitor.id}>  
          {/* <tr>    */}
              <td>{visitor.full_name}</td>
              <td>{visitor.email}</td>
              <td>{visitor.occupation}</td>
              <td>{visitor.phone}</td>
          </tr>
          </>
      )
  })
}
    render() {
      const {users,isLoading, isError, count, vcount} = this.state
        return isLoading
        ?(
          <div>
          <div class="loader"></div>
          </div>
        ): (
    <div>
    <div id="app">
      <div className="main-wrapper main-wrapper-1">
        <Navbar/>
        <SideNavigation/>
        {/* Main Content */}
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>Dashboard</h1>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="card">
                  <div className="card-body card-type-3">
                    <div className="row">
                      <div className="col">
                        <h6 className="text-muted mb-0">Staffs</h6>
                        <span className="font-weight-bold mb-0">{count.count}</span>
                      </div>
                      <div className="col-auto">
                        <div className="card-circle l-bg-orange text-white">
                          <i className="fas fa-book-open" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap">Total number of staffs</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card">
                  <div className="card-body card-type-3">
                    <div className="row">
                      <div className="col">
                        <h6 className="text-muted mb-0">Visitors</h6>
                        <span className="font-weight-bold mb-0">{vcount.count}</span>
                      </div>
                      <div className="col-auto">
                        <div className="card-circle l-bg-cyan text-white">
                          <i className="fas fa-briefcase" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap">Total number of visitors</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card">
                  <div className="card-body card-type-3">
                    <div className="row">
                      <div className="col">
                        <h6 className="text-muted mb-0">Inquiry</h6>
                        <span className="font-weight-bold mb-0">7,897</span>
                      </div>
                      <div className="col-auto">
                        <div className="card-circle l-bg-green text-white">
                          <i className="fas fa-phone" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 15%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card">
                  <div className="card-body card-type-3">
                    <div className="row">
                      <div className="col">
                        <h6 className="text-muted mb-0">Earning</h6>
                        <span className="font-weight-bold mb-0">$8,965</span>
                      </div>
                      <div className="col-auto">
                        <div className="card-circle l-bg-purple text-white">
                          <i className="fas fa-dollar-sign" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 5.4%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12">
              <div className="card">
                              <div className="card-header">
                              <h4>All Staff</h4>
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
                              <span style={{float: "right"}}><Link to="/staff">View More <i class="fas fa-angle-double-right"></i></Link></span>
                              </div>
                          </div>
              </div>
            </div> 
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Stats</h4>
                  </div>
                  <div className="card-body">
                    <h4 className="header-title">Total staff number</h4>
                    <p className="text-muted">{count.count}</p>
                    <h4 className="header-title">Total visitors number</h4>
                    <p className="text-muted">{vcount.count}</p>
                    <div className="mt-1">
                      <div className="recent-report__chart">
                        <div id="chart2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 col-sm-12">
              <div className="card">
                              <div className="card-header">
                              <h4>All Visitors</h4>
                              </div>
                              <div className="card-body">
                              <table className="table table-hover">
                                  <thead>
                                  <tr>
                                      <th scope="col">Name</th>
                                      <th scope="col">Email</th>
                                      <th scope="col">Occupation</th>
                                      <th scope="col">Phone</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      {this.renderFuckingRows()}                                
                                  </tbody>
                              </table>
                              <span style={{float: "right"}}><Link to="/visitor">View More <i class="fas fa-angle-double-right"></i></Link></span>
                              </div>
                          </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="main-footer">
          {/* <div className="footer-left">
            Copyright © 2019 <div className="bullet" /> Design By Rix<a href="#"></a>
          </div> */}
          <div className="footer-right">
          </div>
        </footer>
      </div>
    </div>
    </div>
        )
    }
}
export default withRouter(Dashboard);