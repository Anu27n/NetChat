import React from 'react';
import './OnlineStatus.css';

const OnlineStatus = ({ isOnline, size = 'small', showText = false }) => {
    const getStatusText = () => {
        return isOnline ? 'Online' : 'Offline';
    };

    return (
        <div className={`online-status ${size}`}>
            <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
                {isOnline && <div className="pulse"></div>}
            </div>
            {showText && <span className="status-text">{getStatusText()}</span>}
        </div>
    );
};

export default OnlineStatus;
