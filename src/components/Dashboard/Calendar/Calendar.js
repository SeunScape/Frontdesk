import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideNavigation from '../SideNav/SideNavigation';


const Calendar = () => {
    return (
        <div>
            <Navbar/>
        <SideNavigation/>
            <div className="main-content">
  <section className="section">
    <div className="section-header">
      <h1>Calendar</h1>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
        <div className="breadcrumb-item"><a href="#">Apps</a></div>
        <div className="breadcrumb-item">Calendar</div>
      </div>
    </div>
    <div className="section-body">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Calendar</h4>
            </div>
            <div className="card-body">
              <div className="fc-overflow">
                <div id="myEvent" />
              </div>
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
        </div>

    )
}

export default Calendar;