import React, { useState } from 'react';
import { useMessageContext } from 'stream-chat-react';
import './MessageReactions.css';

const MessageReactions = () => {
    const { message, channel } = useMessageContext();
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    
    const quickReactions = ['👍', '❤️', '😂', '😮', '😢', '😡'];
    const moreEmojis = ['🎉', '🔥', '👏', '💯', '✨', '⚡', '💪', '🙌', '👌', '🤝', '🎯', '💡'];

    const handleReaction = async (emoji) => {
        try {
            await channel.sendReaction(message.id, {
                type: 'love', // Stream Chat reaction type
                emoji: emoji,
            });
            setShowEmojiPicker(false);
        } catch (error) {
            console.error('Error sending reaction:', error);
        }
    };

    const removeReaction = async (reactionType) => {
        try {
            await channel.deleteReaction(message.id, reactionType);
        } catch (error) {
            console.error('Error removing reaction:', error);
        }
    };

    const getReactionCounts = () => {
        if (!message.reaction_counts) return {};
        return message.reaction_counts;
    };

    const getUserReactions = () => {
        if (!message.own_reactions) return [];
        return message.own_reactions;
    };

    const hasUserReacted = (emoji) => {
        return getUserReactions().some(reaction => reaction.emoji === emoji);
    };

    const reactionCounts = getReactionCounts();
    const userReactions = getUserReactions();

    return (
        <div className="message-reactions-container">
            {/* Quick reaction buttons */}
            <div className="quick-reactions">
                {quickReactions.map((emoji) => {
                    const count = Object.values(reactionCounts).find(r => r.emoji === emoji)?.count || 0;
                    const hasReacted = hasUserReacted(emoji);
                    
                    return (
                        <button
                            key={emoji}
                            className={`reaction-btn ${hasReacted ? 'reacted' : ''}`}
                            onClick={() => hasReacted ? removeReaction('love') : handleReaction(emoji)}
                            title={`${emoji} ${count > 0 ? `(${count})` : ''}`}
                        >
                            <span className="reaction-emoji">{emoji}</span>
                            {count > 0 && <span className="reaction-count">{count}</span>}
                        </button>
                    );
                })}
                
                <button 
                    className="more-reactions-btn"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    title="More reactions"
                >
                    ➕
                </button>
            </div>

            {/* Emoji picker */}
            {showEmojiPicker && (
                <div className="emoji-picker-overlay" onClick={() => setShowEmojiPicker(false)}>
                    <div className="emoji-picker" onClick={(e) => e.stopPropagation()}>
                        <div className="emoji-picker-header">
                            <span>Choose a reaction</span>
                            <button 
                                className="close-btn"
                                onClick={() => setShowEmojiPicker(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="emoji-grid">
                            {[...quickReactions, ...moreEmojis].map((emoji, index) => (
                                <button
                                    key={`${emoji}-${index}`}
                                    className="emoji-option"
                                    onClick={() => handleReaction(emoji)}
                                    title={emoji}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Display existing reactions */}
            {Object.keys(reactionCounts).length > 0 && (
                <div className="existing-reactions">
                    {Object.entries(reactionCounts).map(([type, reaction]) => (
                        <div 
                            key={type}
                            className={`existing-reaction ${hasUserReacted(reaction.emoji) ? 'user-reacted' : ''}`}
                            onClick={() => hasUserReacted(reaction.emoji) ? removeReaction(type) : handleReaction(reaction.emoji)}
                        >
                            <span className="reaction-emoji">{reaction.emoji}</span>
                            <span className="reaction-count">{reaction.count}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MessageReactions;
