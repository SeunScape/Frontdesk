import React from 'react';

class Navbar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div>
                <div className="navbar-bg" />
                    <nav className="navbar navbar-expand-lg main-navbar">
                    <div className="form-inline mr-auto">
                    <ul className="navbar-nav mr-3">
                        <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn"><i className="fas fa-bars" /></a></li>
                        <li><a href="#" className="nav-link nav-link-lg fullscreen-btn">
                            <i className="fas fa-expand" />
                        </a>
                        </li>
                    </ul>
                    </div>
                    <ul className="navbar-nav navbar-right">
                    <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                        <img alt="image" src="assets/img/user.png" className="user-img-radious-style" />
                        <span className="d-sm-none d-lg-inline-block" /></a>
                        <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-title">Hello Sarah Smith</div>
                        <a href="profile.html" className="dropdown-item has-icon">
                            <i className="far fa-user" /> Profile
                        </a>
                        <a href="timeline.html" className="dropdown-item has-icon">
                            <i className="fas fa-bolt" /> Activities
                        </a>
                        <a href="#" className="dropdown-item has-icon">
                            <i className="fas fa-cog" /> Settings
                        </a>
                        <div className="dropdown-divider" />
                        <a href="auth-login.html" className="dropdown-item has-icon text-danger">
                            <i className="fas fa-sign-out-alt" /> Logout
                        </a>
                        </div>
                    </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;