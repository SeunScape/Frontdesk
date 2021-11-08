import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
            <div>
            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <Link to ="index.html">
                    <img alt="image" src="assets/img/logo.png" className="header-logo" />
                    <span className="logo-name">Ality</span>
                    </Link>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">Main</li>
                    <li className="dropdown active">
                    <Link to="/dashboard" className="nav-link has-dropdown"><i className="fas fa-home" /><span>Dashboard</span></Link>
                    </li>
                    <li className="dropdown">
                    <Link to ="/staff" className="nav-link has-dropdown"><i className="fas fa-broom" /><span>Staff</span></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="" className="nav-link" href="widget-chart.html">Add Staff</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                    <Link to ="/staff" className="nav-link has-dropdown"><i className="fas fa-broom" /><span>Visitors</span></Link>
                        <ul className="dropdown-menu">
                            <li><Link to= "" className="nav-link" href="widget-chart.html">Add Visitors</Link></li>
                        </ul>
                    </li>
                    <li>
                    <Link href="/staff" className="nav-link"><i className="fas fa-broom" /><span>Schedule</span></Link>
                    </li>
                    <li>
                    <Link to="" className="nav-link" onClick= {this.Logout}><i className="fas fa-broom" /><span>Logout</span></Link>
                    </li>
                </ul>
                </aside>
            </div>
        </div>
        );
    }
}
export default withRouter(SideNavigation);