import React, { useState, useEffect } from 'react';
import './NotificationCenter.css';

const NotificationCenter = () => {
    const [notifications, setNotifications] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Listen for custom notification events
        const handleNewNotification = (event) => {
            const newNotification = {
                id: Date.now(),
                title: event.detail.title,
                message: event.detail.message,
                type: event.detail.type || 'info',
                timestamp: new Date(),
                read: false
            };
            
            setNotifications(prev => [newNotification, ...prev.slice(0, 49)]);
            
            // Auto-remove after 5 seconds for non-important notifications
            if (event.detail.type !== 'important') {
                setTimeout(() => {
                    removeNotification(newNotification.id);
                }, 5000);
            }
        };

        window.addEventListener('netchat:notification', handleNewNotification);
        
        return () => {
            window.removeEventListener('netchat:notification', handleNewNotification);
        };
    }, []);

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
    };

    const markAsRead = (id) => {
        setNotifications(prev => 
            prev.map(notif => 
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    };

    const clearAll = () => {
        setNotifications([]);
        setIsOpen(false);
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const getTypeIcon = (type) => {
        switch (type) {
            case 'success': return '✅';
            case 'error': return '❌';
            case 'warning': return '⚠️';
            case 'info': return 'ℹ️';
            case 'important': return '🔔';
            default: return 'ℹ️';
        }
    };

    const formatTime = (timestamp) => {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        
        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
        return timestamp.toLocaleDateString();
    };

    return (
        <div className="notification-center">
            <button 
                className="notification-toggle"
                onClick={() => setIsOpen(!isOpen)}
                title="Notifications"
            >
                🔔
                {unreadCount > 0 && (
                    <span className="notification-badge">{unreadCount}</span>
                )}
            </button>

            {isOpen && (
                <div className="notification-dropdown">
                    <div className="notification-header">
                        <span>Notifications</span>
                        <div className="notification-actions">
                            {notifications.length > 0 && (
                                <button onClick={clearAll} className="clear-all-btn">
                                    Clear all
                                </button>
                            )}
                            <button onClick={() => setIsOpen(false)} className="close-btn">
                                ✕
                            </button>
                        </div>
                    </div>
                    
                    <div className="notification-list">
                        {notifications.length === 0 ? (
                            <div className="no-notifications">
                                <div className="no-notifications-icon">🔕</div>
                                <div>No notifications</div>
                                <div className="no-notifications-hint">You're all caught up!</div>
                            </div>
                        ) : (
                            notifications.map(notification => (
                                <div 
                                    key={notification.id}
                                    className={`notification-item ${notification.read ? 'read' : 'unread'} ${notification.type}`}
                                    onClick={() => markAsRead(notification.id)}
                                >
                                    <div className="notification-icon">
                                        {getTypeIcon(notification.type)}
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-title">{notification.title}</div>
                                        <div className="notification-message">{notification.message}</div>
                                        <div className="notification-time">{formatTime(notification.timestamp)}</div>
                                    </div>
                                    <button 
                                        className="notification-remove"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeNotification(notification.id);
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// Helper function to trigger notifications from anywhere in the app
export const showNotification = (title, message, type = 'info') => {
    const event = new CustomEvent('netchat:notification', {
        detail: { title, message, type }
    });
    window.dispatchEvent(event);
};

export default NotificationCenter;
