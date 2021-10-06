import React from 'react';

const SideNavigation = () => {
    return (
        <div>
            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="index.html">
                    <img alt="image" src="assets/img/logo.png" className="header-logo" />
                    <span className="logo-name">Ality</span>
                    </a>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">Main</li>
                    <li className="dropdown active">
                    <a href="/dashboard" className="nav-link has-dropdown"><i className="fas fa-home" /><span>Dashboard</span></a>
                    </li>
                    <li className="dropdown">
                    <a href="/staff" className="nav-link has-dropdown"><i className="fas fa-broom" /><span>Staff</span></a>
                    </li>
                </ul>
                </aside>
            </div>
        </div>
    );
}

export default SideNavigation;