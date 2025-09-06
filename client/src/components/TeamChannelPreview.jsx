import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';
import { OnlineStatus } from './';

const TeamChannelPreview = ({ setActiveChannel, setIsCreating, setIsEditing, setToggleContainer, channel, type }) => {
    const { channel: activeChannel, client } = useChatContext();

    const ChannelPreview = () => (
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    );


    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
    
        console.log(members[0]);

        return (
            <div className="channel-preview__item single">
                <div style={{ position: 'relative' }}>
                    <Avatar 
                        image={members[0]?.user?.image}
                        name={members[0]?.user?.fullName || members[0]?.user?.id}
                        size={24}
                    />
                    <div style={{ position: 'absolute', bottom: -2, right: -2 }}>
                        <OnlineStatus isOnline={members[0]?.user?.online} size="small" />
                    </div>
                </div>
                <div>
                    <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
                    <OnlineStatus isOnline={members[0]?.user?.online} size="small" showText />
                </div>
            </div>
        )
    }

    return (
        <div className={
            channel?.id === activeChannel?.id
                ? 'channel-preview__wrapper__selected'
                : 'channel-preview__wrapper'
        }
        onClick={() => {
            setIsCreating(false);
            setIsEditing(false);
            setActiveChannel(channel);
            if(setToggleContainer) {
                setToggleContainer((prevState) => !prevState)
            }
        }}
        >
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    );
}

export default TeamChannelPreview