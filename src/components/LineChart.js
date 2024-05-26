import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
// LineCharts component  renders a line chart using the Recharts library and Bootstrap for styling.
const LineCharts = () => {
    // Sample data for the line chart
    const data = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
        // Container with Bootstrap classes for fluid layout
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-9 mb-6">
                    <div className="card shadow mb-6">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Line Chart</h6>
                        </div>
                        <div className="mb-12" style={{ backgroundColor: 'white' }}>
                            {/* Responsive container for the chart */}
                            <ResponsiveContainer width="90%" height={450}>
                                <LineChart
                                    width={500}
                                    height={500}
                                    data={data}
                                    margin={{
                                        top: 15,
                                        right: 5,
                                        left: 5,
                                        bottom: 10,
                                    }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LineCharts;