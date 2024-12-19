import React, { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Dashboard</h1>
            </div>
            <ul>
                <li
                    className={activeSection === 'account' ? 'active' : ''}
                    onClick={() => setActiveSection('account')}
                >
                    <Link to='/dashboard/account-manage'>
                        <i className="fas fa-user icon"></i>
                        Quản lý tài khoản
                    </Link>
                </li>
                <li
                    className={activeSection === 'progress' ? 'active' : ''}
                    onClick={() => setActiveSection('progress')}
                >
                    <Link to='/dashboard/list-progress'>
                        <i className="fas fa-chart-line icon"></i>
                        Xem tiến trình học
                    </Link>
                </li>
                <li
                    className={activeSection === 'grading' ? 'active' : ''}
                    onClick={() => setActiveSection('grading')}
                >
                    <Link to='/dashboard/list-progress'>
                        <i className="fas fa-edit icon"></i>
                        Chấm điểm
                    </Link>
                </li>
                {(activeSection === 'grading' || activeSection === 'grading-reading' || activeSection === 'grading-writing') && (
                    <ul className="grading-options">
                        <li className={activeSection === 'grading-reading' ? 'active' : ''}
                            onClick={() => setActiveSection('grading-reading')}>
                            <i className="fas fa-book-open icon"></i>
                            Chấm bài đọc
                        </li>
                        <li className={activeSection === 'grading-writing' ? 'active' : ''}
                            onClick={() => setActiveSection('grading-writing')}>
                            <i className="fas fa-pen icon"></i>
                            Chấm bài viết
                        </li>
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default SideBar;
