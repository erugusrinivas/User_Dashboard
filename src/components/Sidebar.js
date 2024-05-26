import 'font-awesome/css/font-awesome.min.css';
const Sidebar = () => {
  return (
    <>
      <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-text mx-3">Dashboard</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/overview">
            <i className="fas fa-fw fa-area-chart"></i>
            <span>Overview</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/reports">
            <i className="fas fa-fw fa-line-chart"></i>
            <span>Reports</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/analytics">
            <i className="fas fa-fw fa-bar-chart"></i>
            <span>Analytics</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/charts">
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/GraphCharts">
            <div className='Chart'>
              <i className="fa-solid fa-chart-simple"></i>
              <span>Bar Chart</span>
            </div>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/LineCharts">
            <div className='Chart'>
              <i className="fa-solid fa-chart-line"></i>
              <span>Line Chart</span>
            </div>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/table">
            <i className="fas fa-fw fa-table"></i>
            <span>Table</span>
          </a>
        </li>
      </ul>
    </>
  );
};
export default Sidebar;