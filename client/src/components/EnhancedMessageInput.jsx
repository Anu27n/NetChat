import React from 'react';
import { MessageInput } from 'stream-chat-react';
import { QuickReplies } from './';
import './EnhancedMessageInput.css';

const EnhancedMessageInput = ({ overrideSubmitHandler, onInputChange, onBlur }) => {
    const handleQuickReply = (message) => {
        if (overrideSubmitHandler) {
            overrideSubmitHandler(message);
        }
    };

    return (
        <div className="enhanced-message-input">
            <MessageInput 
                overrideSubmitHandler={overrideSubmitHandler}
                onChange={onInputChange}
                onBlur={onBlur}
            />
            <div className="message-input-extras">
                <QuickReplies onSend={handleQuickReply} />
            </div>
        </div>
    );
};

export default EnhancedMessageInput;
