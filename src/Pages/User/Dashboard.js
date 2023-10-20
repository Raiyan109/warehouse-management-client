import React from 'react';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const { stockAuth, setStockAuth } = useAuth()
    const navigate = useNavigate()
    return (
        <div className='min-h-screen p-1'>
            <nav className='sidebar-nav'>
                <ul>
                    <li onClick={() => navigate('/manage')}>
                        <div class="home-icon">
                            <div class="roof">
                                <div class="roof-edge"></div>
                            </div>
                            <div class="front"></div>
                        </div>
                    </li>
                    <li onClick={() => navigate('/my')}>
                        <div class="about-icon">
                            <div class="head">
                                <div class="eyes"></div>
                                <div class="beard"></div>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => navigate('/addItem')}>
                        <div class="work-icon">
                            <div class="paper"></div>
                            <div class="lines"></div>
                            <div class="lines"></div>
                            <div class="lines"></div>
                        </div>
                    </li>
                    <li>
                        <div class="mail-icon">
                            <div class="mail-base">
                                <div class="mail-top"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;