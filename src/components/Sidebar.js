// import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
// import './SideBar.css';
//  Sidebar component renders a collapsible sidebar with navigation links.
const Sidebar = () => {
  // State to manage the collapsed state of the sidebar
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // // Function to toggle the sidebar collapsed state
  // const handleToggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };
  return (
    <>
      {/* Sidebar container with conditional collapse class */}
      {/* <ul className={navbar-nav bg-gradient-info sidebar sidebar-dark ${isCollapsed ? 'collapse' : ''}} id="accordionSidebar"> */}
      <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          {/* {!isCollapsed && <div className="sidebar-brand-text mx-3">Dashboard</div>} */}
          <div className="sidebar-brand-text mx-3">Dashboard</div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fa-solid fa-house"></i>
            {/* {!isCollapsed && <span>Dashboard</span>} */}
             <span>Dashboard</span>
          </a>
        </li>

        {/* Nav Item - Overview */}
        <li className="nav-item active">
          <a className="nav-link" href="/overview">
            <i className="fas fa-fw fa-area-chart"></i>
            {/* {!isCollapsed && <span>Overview</span>} */}
             <span>Overview</span>
          </a>
        </li>

        {/* Nav Item - Reports */}
        <li className="nav-item active">
          <a className="nav-link" href="/reports">
            <i className="fas fa-fw fa-line-chart"></i>
            {/* {!isCollapsed && <span>Reports</span>} */}
           <span>Reports</span>
          </a>
        </li>

        {/* Nav Item - Analytics */}
        <li className="nav-item active">
          <a className="nav-link" href="/analytics">
            <i className="fas fa-fw fa-bar-chart"></i>
            {/* {!isCollapsed && <span>Analytics</span>} */}
            <span>Analytics</span>
          </a>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item active">
          <a className="nav-link" href="/charts">
            {/* {!isCollapsed && <span>Charts</span>} */}
             <span>Charts</span>
          </a>
        </li>

        {/* Nav Item - Bar Chart */}
        <li className="nav-item active">
          <a className="nav-link" href="/GraphCharts">
            <div className='Chart'>
              <i className="fa-solid fa-chart-simple"></i>
              {/* {!isCollapsed && <span>Bar Chart</span>} */}
               <span>Bar Chart</span>
            </div>
          </a>
        </li>

        {/* Nav Item - Line Chart */}
        <li className="nav-item active">
          <a className="nav-link" href="/LineCharts">
            <div className='Chart'>
              <i className="fa-solid fa-chart-line"></i>
              {/* {!isCollapsed && <span>Line Chart</span>} */}
               <span>Line Chart</span>
            </div>
          </a>
        </li>

        {/* Nav Item - Table */}
        <li className="nav-item active">
          <a className="nav-link" href="/table">
            <i className="fas fa-fw fa-table"></i>
            {/* {!isCollapsed && <span>Table</span>} */}
             <span>Table</span>
          </a>
        </li>
      </ul>

      {/* Toggle button for collapsing/expanding the sidebar */}
      {/* <button className="toggle-button" onClick={handleToggleSidebar}>
        <i className={fas ${isCollapsed ? 'fa-bars' : 'fa-bars'}}></i>
      </button>

      {/* Page content wrapper with conditional class based on sidebar state */}
      {/* <div id="page-content-wrapper" className={isCollapsed ? 'collapsed' : ''}></div> */}
    </>
  );
};
export default Sidebar;