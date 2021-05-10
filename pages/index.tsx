import React from "react";
import { Channel, Window, ChannelHeader, MessageList, MessageInput } from "stream-chat-react";

const IndexPage = () => {
    return (
        <div>
            <Channel>
                <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
                </Window>
            </Channel>
        </div>
    )
}

export default IndexPage;