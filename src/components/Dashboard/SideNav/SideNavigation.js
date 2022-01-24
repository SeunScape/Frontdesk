import React from 'react';
import {Link} from 'react-router-dom'
class SideNavigation extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
Logout =() => {
    localStorage.clear();
    const { history } = this.props;
            history.push("/login")
}
    render() {
        return (
            
<div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="index.html">
            
              <span class="logo-name">FRONTDESK MS</span>
            </a>
          </div>
          <ul class="sidebar-menu">
            <li class="menu-header">Main</li>
            <li class="dropdown">
              <a href="/" class="nav-link"><i class="fas fa-home"></i><span>Dashboard</span></a>
            </li>
            <li class="dropdown active">
              <a href="#" class="nav-link has-dropdown"><i class="fas fa-broom"></i><span>Staff</span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="/createstaff">Add Staff</a></li>
                <li class="active"><a class="nav-link" href="/staff">View Staff</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="nav-link has-dropdown"><i class="fab fa-accusoft"></i><span>Visitors</span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="/createvisitor">Add Visitors</a></li>
                <li><a class="nav-link" href="/visitor">View Visitors</a></li>
              </ul>
            </li>
            <li class="dropdown">
            <Link to="" className="nav-link" onClick= {this.Logout}><i className="fas fa-broom" /><span>Logout</span></Link>
            </li>
          </ul>
        </aside>
      </div>
        );
    }
}

export default SideNavigation;