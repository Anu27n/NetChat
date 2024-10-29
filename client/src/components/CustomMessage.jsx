import React from 'react';
import { useMessageContext } from 'stream-chat-react';

const CustomMessage = () => {
    const { message } = useMessageContext();

    if (!message || !message.user) {
        console.error('Message or user is undefined', message);
        return null;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align messages to the left
                padding: '10px',
                backgroundColor: message.user.id === message.user.id ? '#d1e7dd' : '#f1f1f1', // Custom background color
                borderRadius: '10px', // Rounded corners
                marginBottom: '10px', // Space between messages
            }}
        >
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{message.user.name}</div>
            <div style={{ fontSize: '14px', color: '#333' }}>{message.text}</div>
        </div>
    );
};

export default CustomMessage;