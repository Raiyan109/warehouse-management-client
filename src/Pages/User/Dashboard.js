import React from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='min-h-screen p-1'>
            <nav className='sidebar-nav'>
                <ul>
                    <Link to='/manage'>
                        <li>
                            <div class="home-icon">
                                <div class="roof">
                                    <div class="roof-edge"></div>
                                </div>
                                <div class="front"></div>
                            </div>
                        </li>
                    </Link>
                    <Link to='/addItem'>
                        <li>
                            <div class="about-icon">
                                <div class="head">
                                    <div class="eyes"></div>
                                    <div class="beard"></div>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to='/my'>
                        <li>
                            <div class="work-icon">
                                <div class="paper"></div>
                                <div class="lines"></div>
                                <div class="lines"></div>
                                <div class="lines"></div>
                            </div>
                        </li>
                    </Link>
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