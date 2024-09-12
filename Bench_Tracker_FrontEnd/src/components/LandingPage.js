import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h1>Bench Management System</h1>
            <div className="dashboard-buttons">
                <div className="dashboard-card" onClick={() => navigate('/bench-manager')}>
                    <h2>Bench Manager</h2>
                    <p>Manage candidates, update details, and more.</p>
                </div>
                <div className="dashboard-card" onClick={() => navigate('/mentor-head')}>
                    <h2>Mentor Head</h2>
                    <p>Assign mentors, manage mentor availability, and more.</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
