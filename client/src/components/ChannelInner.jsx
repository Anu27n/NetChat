import React, { useState } from 'react';
import { MessageList, MessageInput, Thread, Window, useChannelActionContext, Avatar, useChannelStateContext, useChatContext } from 'stream-chat-react';

import { ChannelInfo } from '../assets';
import { OnlineStatus, FileDropZone, TypingIndicator, useTypingIndicator, EnhancedMessageInput } from './';

export const GiphyContext = React.createContext({});

const ChannelInner = ({ setIsEditing }) => {
  const [giphyState, setGiphyState] = useState(false);
  const { sendMessage } = useChannelActionContext();
  const { startTyping, stopTyping } = useTypingIndicator();
  
  const overrideSubmitHandler = (message) => {
    let updatedMessage = {
      attachments: message.attachments,
      mentioned_users: message.mentioned_users,
      parent_id: message.parent?.id,
      parent: message.parent,
      text: message.text,
    };
    
    if (giphyState) {
      updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
    }
    
    if (sendMessage) {
      sendMessage(updatedMessage);
      setGiphyState(false);
      stopTyping();
    }
  };

  const handleInputChange = () => {
    startTyping();
  };

  const handleInputBlur = () => {
    stopTyping();
  };

  return (
    <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
      <FileDropZone>
        <div style={{ display: 'flex', width: '100%' }}>
          <Window>
            <TeamChannelHeader setIsEditing={setIsEditing} />
            <MessageList />
            <TypingIndicator />
            <EnhancedMessageInput 
              overrideSubmitHandler={overrideSubmitHandler}
              onInputChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </Window>
          <Thread />
        </div>
      </FileDropZone>
    </GiphyContext.Provider>
  );
};

const TeamChannelHeader = ({ setIsEditing }) => {
    const { channel, watcher_count } = useChannelStateContext();
    const { client } = useChatContext();
  
    const MessagingHeader = () => {
      const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
      const additionalMembers = members.length - 3;
  
      if(channel.type === 'messaging') {
        return (
          <div className='team-channel-header__name-wrapper'>
            {members.map(({ user }, i) => (
              <div key={i} className='team-channel-header__name-multi'>
                <div style={{ position: 'relative' }}>
                  <Avatar image={user.image} name={user.fullName || user.id} size={32} />
                  <div style={{ position: 'absolute', bottom: -2, right: -2 }}>
                    <OnlineStatus isOnline={user.online} size="small" />
                  </div>
                </div>
                <p className='team-channel-header__name user'>{user.fullName || user.id}</p>
              </div>
            ))}
  
            {additionalMembers > 0 && <p className='team-channel-header__name user'>and {additionalMembers} more</p>}
          </div>
        );
      }
  
      return (
        <div className='team-channel-header__channel-wrapper'>
          <p className='team-channel-header__name'># {channel.data.name}</p>
          <span style={{ display: 'flex' }} onClick={() => setIsEditing(true)}>
            <ChannelInfo />
          </span>
        </div>
      );
    };
  
    const getWatcherText = (watchers) => {
      if (!watchers) return 'No users online';
      if (watchers === 1) return '1 user online';
      return `${watchers} users online`;
    };
  
    return (
      <div className='team-channel-header__container'>
        <MessagingHeader />
        <div className='team-channel-header__right'>
          <p className='team-channel-header__right-text'>{getWatcherText(watcher_count)}</p>
        </div>
      </div>
    );
  };

  export default ChannelInner;