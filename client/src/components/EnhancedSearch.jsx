import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';
import './EnhancedSearch.css';

const EnhancedSearch = ({ setToggleContainer }) => {
    const { client, setActiveChannel } = useChatContext();
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        messageType: 'all', // all, text, file, image
        dateRange: 'all', // all, today, week, month
        user: 'all'
    });
    const [showAdvanced, setShowAdvanced] = useState(false);

    const searchMessages = async (searchQuery, searchFilters) => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);
        try {
            const filterConditions = {
                type: 'messaging',
                members: { $in: [client.userID] }
            };

            // Add date filter
            if (searchFilters.dateRange !== 'all') {
                const now = new Date();
                let startDate;
                
                switch (searchFilters.dateRange) {
                    case 'today':
                        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                        break;
                    case 'week':
                        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                        break;
                    case 'month':
                        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                        break;
                    default:
                        startDate = null;
                }
                
                if (startDate) {
                    filterConditions.created_at = { $gte: startDate.toISOString() };
                }
            }

            const channels = await client.queryChannels(filterConditions);
            const allMessages = [];

            for (const channel of channels) {
                const messageFilter = {
                    text: { $autocomplete: searchQuery }
                };

                // Add user filter
                if (searchFilters.user !== 'all') {
                    messageFilter.user_id = searchFilters.user;
                }

                const messages = await channel.search(messageFilter);
                
                messages.results.forEach(result => {
                    allMessages.push({
                        ...result.message,
                        channel: channel,
                        channelName: channel.data.name || 'Direct Message'
                    });
                });
            }

            // Filter by message type
            let filteredMessages = allMessages;
            if (searchFilters.messageType !== 'all') {
                filteredMessages = allMessages.filter(msg => {
                    switch (searchFilters.messageType) {
                        case 'text':
                            return !msg.attachments || msg.attachments.length === 0;
                        case 'file':
                            return msg.attachments && msg.attachments.some(att => att.type === 'file');
                        case 'image':
                            return msg.attachments && msg.attachments.some(att => att.type === 'image');
                        default:
                            return true;
                    }
                });
            }

            setSearchResults(filteredMessages.slice(0, 20)); // Limit to 20 results
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            searchMessages(query, filters);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query, filters]);

    const handleResultClick = (message) => {
        setActiveChannel(message.channel);
        setToggleContainer && setToggleContainer(false);
        setQuery('');
        setSearchResults([]);
    };

    const highlightText = (text, highlight) => {
        if (!highlight.trim()) return text;
        
        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, index) => 
            regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
    };

    return (
        <div className="enhanced-search">
            <div className="search-header">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search messages, files, and more..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="enhanced-search-input"
                    />
                    <button 
                        className="advanced-toggle"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        title="Advanced search options"
                    >
                        ⚙️
                    </button>
                </div>
                
                {showAdvanced && (
                    <div className="advanced-filters">
                        <select 
                            value={filters.messageType} 
                            onChange={(e) => setFilters(prev => ({ ...prev, messageType: e.target.value }))}
                        >
                            <option value="all">All types</option>
                            <option value="text">Text only</option>
                            <option value="file">Files</option>
                            <option value="image">Images</option>
                        </select>
                        
                        <select 
                            value={filters.dateRange} 
                            onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
                        >
                            <option value="all">All time</option>
                            <option value="today">Today</option>
                            <option value="week">This week</option>
                            <option value="month">This month</option>
                        </select>
                    </div>
                )}
            </div>

            {loading && (
                <div className="search-loading">
                    <div className="loading-spinner"></div>
                    Searching...
                </div>
            )}

            {searchResults.length > 0 && (
                <div className="search-results">
                    <div className="results-header">
                        Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </div>
                    {searchResults.map((message, index) => (
                        <div 
                            key={`${message.id}-${index}`}
                            className="search-result-item"
                            onClick={() => handleResultClick(message)}
                        >
                            <div className="result-header">
                                <span className="result-user">{message.user.name || message.user.id}</span>
                                <span className="result-channel">#{message.channelName}</span>
                                <span className="result-date">
                                    {new Date(message.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="result-content">
                                {highlightText(message.text || '', query)}
                                {message.attachments && message.attachments.length > 0 && (
                                    <div className="result-attachments">
                                        📎 {message.attachments.length} attachment{message.attachments.length !== 1 ? 's' : ''}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {query && !loading && searchResults.length === 0 && (
                <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <div>No messages found</div>
                    <div className="no-results-hint">Try different keywords or adjust filters</div>
                </div>
            )}
        </div>
    );
};

export default EnhancedSearch;
