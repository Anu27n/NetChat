import React, { useState } from 'react';
import './QuickReplies.css';

const QuickReplies = ({ onSend }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const quickTemplates = [
        { id: 1, text: "👍 Sounds good!", emoji: "👍" },
        { id: 2, text: "Thanks for the update!", emoji: "🙏" },
        { id: 3, text: "I'll get back to you shortly", emoji: "⏰" },
        { id: 4, text: "Let me check and confirm", emoji: "🔍" },
        { id: 5, text: "Great work! 🎉", emoji: "🎉" },
        { id: 6, text: "Could you please clarify?", emoji: "❓" },
        { id: 7, text: "Meeting in 5 minutes", emoji: "📅" },
        { id: 8, text: "Have a great day! ☀️", emoji: "☀️" }
    ];

    const handleTemplateClick = (template) => {
        onSend({
            text: template.text,
            attachments: [],
            mentioned_users: []
        });
        setIsOpen(false);
    };

    return (
        <div className="quick-replies">
            <button 
                className="quick-replies-toggle"
                onClick={() => setIsOpen(!isOpen)}
                title="Quick replies"
            >
                ⚡
            </button>
            
            {isOpen && (
                <div className="quick-replies-dropdown">
                    <div className="quick-replies-header">
                        <span>Quick Replies</span>
                        <button onClick={() => setIsOpen(false)}>✕</button>
                    </div>
                    <div className="quick-replies-list">
                        {quickTemplates.map(template => (
                            <button
                                key={template.id}
                                className="quick-reply-item"
                                onClick={() => handleTemplateClick(template)}
                            >
                                <span className="quick-reply-emoji">{template.emoji}</span>
                                <span className="quick-reply-text">{template.text}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickReplies;
