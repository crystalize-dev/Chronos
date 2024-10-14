import React from 'react';
import OtherUserInfo from './OtherUserInfo';
import InputArea from './InputArea';
import ChatArea from './ChatArea';

const Chat = () => {
    return (
        <div className="border-light-border dark:boder-dark-border flex h-full flex-[2] flex-col border-x border-solid">
            <OtherUserInfo />

            <ChatArea />

            <InputArea />
        </div>
    );
};

export default Chat;
