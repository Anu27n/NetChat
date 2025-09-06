import React, { useState, useEffect } from 'react';
import { useChannelStateContext, useChatContext } from 'stream-chat-react';
import './TypingIndicator.css';

const TypingIndicator = () => {
    const { channel } = useChannelStateContext();
    const { client } = useChatContext();
    const [typingUsers, setTypingUsers] = useState([]);

    useEffect(() => {
        if (!channel) return;

        const handleTypingStart = (event) => {
            if (event.user?.id !== client.userID) {
                setTypingUsers(prev => {
                    const filtered = prev.filter(user => user.id !== event.user.id);
                    return [...filtered, event.user];
                });
            }
        };

        const handleTypingStop = (event) => {
            if (event.user?.id !== client.userID) {
                setTypingUsers(prev => prev.filter(user => user.id !== event.user.id));
            }
        };

        channel.on('typing.start', handleTypingStart);
        channel.on('typing.stop', handleTypingStop);

        return () => {
            channel.off('typing.start', handleTypingStart);
            channel.off('typing.stop', handleTypingStop);
        };
    }, [channel, client.userID]);

    if (typingUsers.length === 0) return null;

    const getTypingText = () => {
        if (typingUsers.length === 1) {
            return `${typingUsers[0].name || typingUsers[0].id} is typing`;
        } else if (typingUsers.length === 2) {
            return `${typingUsers[0].name || typingUsers[0].id} and ${typingUsers[1].name || typingUsers[1].id} are typing`;
        } else {
            return `${typingUsers.length} people are typing`;
        }
    };

    return (
        <div className="typing-indicator">
            <div className="typing-avatars">
                {typingUsers.slice(0, 3).map((user, index) => (
                    <div 
                        key={user.id}
                        className="typing-avatar"
                        style={{ 
                            backgroundImage: user.image ? `url(${user.image})` : 'none',
                            backgroundColor: user.image ? 'transparent' : '#005fff',
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        {!user.image && (user.name || user.id).charAt(0).toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="typing-content">
                <div className="typing-text">{getTypingText()}</div>
                <div className="typing-dots">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                </div>
            </div>
        </div>
    );
};

// Hook to send typing indicators
export const useTypingIndicator = () => {
    const { channel } = useChannelStateContext();
    const [typingTimeout, setTypingTimeout] = useState(null);

    const startTyping = () => {
        if (!channel) return;
        
        channel.keystroke();
        
        // Clear existing timeout
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        
        // Set new timeout to stop typing
        const timeout = setTimeout(() => {
            channel.stopTyping();
        }, 3000);
        
        setTypingTimeout(timeout);
    };

    const stopTyping = () => {
        if (!channel) return;
        
        channel.stopTyping();
        
        if (typingTimeout) {
            clearTimeout(typingTimeout);
            setTypingTimeout(null);
        }
    };

    return { startTyping, stopTyping };
};

export default TypingIndicator;
