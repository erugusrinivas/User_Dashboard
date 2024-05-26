import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Table from './Contacts/Table';
import { ThemeProvider } from 'react-bootstrap';
import { ColorModeContext, useMode } from './theme';
import GraphCharts from './components/GraphCharts';
import LineCharts from './components/LineCharts';
function App() {
  const [theme, colorMode] = useMode();  // Use custom hook to manage theme and color mode
  return (
    // Provide color mode context to the entire app
    <ColorModeContext.Provider value={colorMode}>
      {/* Apply the theme to the entire app */}
      <ThemeProvider theme={theme}>
        <Router>
          <div id="wrapper">
            {/* Sidebar component */}
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {/* Topbar component */}
                <Topbar />
                <div className="container-fluid">
                  {/* Define routes for the application */}
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/charts" element={<Dashboard />} />
                    <Route path="/overview" element={<Dashboard />} />
                    <Route path="/reports" element={<Dashboard />} />
                    <Route path="/analytics" element={<Dashboard />} />
                    <Route path="/table" element={<Table />} />
                    <Route path="/GraphCharts" element={<GraphCharts />} />
                    <Route path="/LineCharts" element={<LineCharts />} />
                  </Routes>
                </div>
              </div>
              {/* Footer component */}
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
