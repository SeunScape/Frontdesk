import React from 'react';
import Navbar from './Navbar/Navbar';
import SideNavigation from './SideNav/SideNavigation';

class Dashboard extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
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
                      <h6 className="text-muted mb-0">Orders</h6>
                      <span className="font-weight-bold mb-0">450</span>
                    </div>
                    <div className="col-auto">
                      <div className="card-circle l-bg-orange text-white">
                        <i className="fas fa-book-open" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 10%</span>
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
                      <h6 className="text-muted mb-0">New Booking</h6>
                      <span className="font-weight-bold mb-0">1,562</span>
                    </div>
                    <div className="col-auto">
                      <div className="card-circle l-bg-cyan text-white">
                        <i className="fas fa-briefcase" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 7.8%</span>
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
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Revenue Chart</h4>
                </div>
                <div className="card-body">
                  <canvas id="chart-1" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Revenue Chart</h4>
                </div>
                <div className="card-body">
                  <canvas id="myChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Project Details</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-invoice">
                    <table className="table table-striped">
                      <tbody><tr>
                          <th>Project</th>
                          <th>Customer</th>
                          <th>Team</th>
                          <th>Status</th>
                          <th>Start Date</th>
                          <th>Delivery Date</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td><a href="#">Project 1</a></td>
                          <td className="font-weight-600">Sarah Smith</td>
                          <td className="text-truncate">
                            <ul className="list-unstyled order-list m-b-0 m-b-0">
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title data-original-title="Wildan Ahdian" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title data-original-title="John Deo" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title data-original-title="Sarah Smith" />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-primary">+4</span>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="badge badge-warning">In Progress</div>
                          </td>
                          <td>July 19, 2018</td>
                          <td>March 25, 2019</td>
                          <td>
                            <a href="#" className="btn btn-primary">Detail</a>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="#">Project 2</a></td>
                          <td className="font-weight-600">Airi Satou</td>
                          <td className="text-truncate">
                            <ul className="list-unstyled order-list m-b-0 m-b-0">
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title data-original-title="Wildan Ahdian" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-7.png" alt="user" data-toggle="tooltip" title data-original-title="Sarah Smith" />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-primary">+2</span>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td>March 21, 2015</td>
                          <td>July 22, 2017</td>
                          <td>
                            <a href="#" className="btn btn-primary">Detail</a>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="#">Project 3</a></td>
                          <td className="font-weight-600">Ashton Cox</td>
                          <td className="text-truncate">
                            <ul className="list-unstyled order-list m-b-0 m-b-0">
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-1.png" alt="user" data-toggle="tooltip" title data-original-title="Wildan Ahdian" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-5.png" alt="user" data-toggle="tooltip" title data-original-title="John Deo" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title data-original-title="Sarah Smith" />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-primary">+5</span>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="badge badge-danger">cancelled</div>
                          </td>
                          <td>January 02, 2018</td>
                          <td>March 12, 2019</td>
                          <td>
                            <a href="#" className="btn btn-primary">Detail</a>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="#">Project 4</a></td>
                          <td className="font-weight-600">Cara Stevens</td>
                          <td className="text-truncate">
                            <ul className="list-unstyled order-list m-b-0">
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-4.png" alt="user" data-toggle="tooltip" title data-original-title="Wildan Ahdian" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-7.png" alt="user" data-toggle="tooltip" title data-original-title="John Deo" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title data-original-title="John Deo" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-2.png" alt="user" data-toggle="tooltip" title data-original-title="Sarah Smith" />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-primary">+1</span>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="badge badge-warning">In Progress</div>
                          </td>
                          <td>July 19, 2018</td>
                          <td>March 25, 2019</td>
                          <td>
                            <a href="#" className="btn btn-primary">Detail</a>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="#">Project 5</a></td>
                          <td className="font-weight-600">John Doe</td>
                          <td className="text-truncate">
                            <ul className="list-unstyled order-list m-b-0">
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title data-original-title="Wildan Ahdian" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-4.png" alt="user" data-toggle="tooltip" title data-original-title="John Deo" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title data-original-title="Sarah Smith" />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-primary">+2</span>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td>May 11, 2017</td>
                          <td>March 15, 2018</td>
                          <td>
                            <a href="#" className="btn btn-primary">Detail</a>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="#">Project 6</a></td>
                          <td className="font-weight-600">Angelica Ramos</td>
                          <td className="text-truncate">
                            <ul className="list-unstyled order-list m-b-0">
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title data-original-title="Wildan Ahdian" />
                              </li>
                              <li className="team-member team-member-sm">
                                <img className="rounded-circle" src="assets/img/users/user-1.png" alt="user" data-toggle="tooltip" title data-original-title="Sarah Smith" />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-primary">+2</span>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="badge badge-danger">cancelled</div>
                          </td>
                          <td>November 02, 2018</td>
                          <td>April 05, 2019</td>
                          <td>
                            <a href="#" className="btn btn-primary">Detail</a>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Earning Details</h4>
                </div>
                <div className="card-body">
                  <h4 className="header-title">Earning Reports</h4>
                  <p className="text-muted">1 Mar - 31 Mar Data</p>
                  <h2 className="mb-3"><i className="mdi mdi-currency-usd text-primary" />$1,65,203</h2>
                  <div className="row mb-1">
                    <div className="col-6">
                      <p className="text-muted mb-1">This Month</p>
                      <h3 className="mt-0 font-20">$117,968
                      </h3>
                    </div>
                    <div className="col-6">
                      <p className="text-muted mb-1">Last Month</p>
                      <h3 className="mt-0 font-20">$74,568
                      </h3>
                    </div>
                  </div>
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
                  <h4>Task Details</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody><tr>
                          <th className="text-center">
                            <div className="custom-checkbox custom-checkbox-table custom-control">
                              <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad" className="custom-control-input" id="checkbox-all" />
                              <label htmlFor="checkbox-all" className="custom-control-label">&nbsp;</label>
                            </div>
                          </th>
                          <th>Task Name</th>
                          <th>Progress</th>
                          <th>Due Date</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-1" />
                              <label htmlFor="checkbox-1" className="custom-control-label">&nbsp;</label>
                            </div>
                          </td>
                          <td>Ecommerce website</td>
                          <td className="align-middle">
                            <div className="progress" data-height={4} data-toggle="tooltip" title="100%">
                              <div className="progress-bar bg-success" data-width={100} />
                            </div>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-4" />
                              <label htmlFor="checkbox-4" className="custom-control-label">&nbsp;</label>
                            </div>
                          </td>
                          <td>Android App</td>
                          <td className="align-middle">
                            <div className="progress" data-height={4} data-toggle="tooltip" title="30%">
                              <div className="progress-bar bg-orange" data-width={30} />
                            </div>
                          </td>
                          <td>2018-09-11</td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-5" />
                              <label htmlFor="checkbox-5" className="custom-control-label">&nbsp;</label>
                            </div>
                          </td>
                          <td>Logo Design</td>
                          <td className="align-middle">
                            <div className="progress" data-height={4} data-toggle="tooltip" title="67%">
                              <div className="progress-bar bg-purple" data-width={67} />
                            </div>
                          </td>
                          <td>2018-04-12</td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-6" />
                              <label htmlFor="checkbox-6" className="custom-control-label">&nbsp;</label>
                            </div>
                          </td>
                          <td>Java Project</td>
                          <td className="align-middle">
                            <div className="progress" data-height={4} data-toggle="tooltip" title="43%">
                              <div className="progress-bar bg-success" data-width={43} />
                            </div>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
                            <div className="custom-checkbox custom-control">
                              <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-4" />
                              <label htmlFor="checkbox-4" className="custom-control-label">&nbsp;</label>
                            </div>
                          </td>
                          <td>Android App</td>
                          <td className="align-middle">
                            <div className="progress" data-height={4} data-toggle="tooltip" title="30%">
                              <div className="progress-bar bg-orange" data-width={30} />
                            </div>
                          </td>
                          <td>2018-09-11</td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog" />
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
              <div className="setting-panel-header">Setting Panel
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input type="radio" name="value" defaultValue={1} className="selectgroup-input select-layout" defaultChecked />
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="value" defaultValue={2} className="selectgroup-input select-layout" />
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Sidebar Color</h6>
                <div className="selectgroup selectgroup-pills sidebar-color">
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" defaultValue={1} className="selectgroup-input select-sidebar" />
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip" data-original-title="Light Sidebar"><i className="fas fa-sun" /></span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" defaultValue={2} className="selectgroup-input select-sidebar" defaultChecked />
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip" data-original-title="Dark Sidebar"><i className="fas fa-moon" /></span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Color Theme</h6>
                <div className="theme-setting-options">
                  <ul className="choose-theme list-unstyled mb-0">
                    <li title="white" className="active">
                      <div className="white" />
                    </li>
                    <li title="cyan">
                      <div className="cyan" />
                    </li>
                    <li title="black">
                      <div className="black" />
                    </li>
                    <li title="purple">
                      <div className="purple" />
                    </li>
                    <li title="orange">
                      <div className="orange" />
                    </li>
                    <li title="green">
                      <div className="green" />
                    </li>
                    <li title="red">
                      <div className="red" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label>
                    <span className="control-label p-r-20">Mini Sidebar</span>
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" id="mini_sidebar_setting" />
                    <span className="custom-switch-indicator" />
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <div className="disk-server-setting m-b-20">
                    <p>Disk Space</p>
                    <div className="sidebar-progress">
                      <div className="progress" data-height={5}>
                        <div className="progress-bar l-bg-green" role="progressbar" data-width="80%" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span className="progress-description">
                        <small>26% remaining</small>
                      </span>
                    </div>
                  </div>
                  <div className="disk-server-setting">
                    <p>Server Load</p>
                    <div className="sidebar-progress">
                      <div className="progress" data-height={5}>
                        <div className="progress-bar l-bg-orange" role="progressbar" data-width="58%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span className="progress-description">
                        <small>Highly Loaded</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" className="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i className="fas fa-undo" /> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="main-footer">
        <div className="footer-left">
          Copyright © 2019 <div className="bullet" /> Design By <a href="#">Redstar</a>
        </div>
        <div className="footer-right">
        </div>
      </footer>
    </div>
  </div>
</div>

        )
    }
}
export default Dashboard;