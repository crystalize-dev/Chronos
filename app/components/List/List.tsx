import React from 'react';
import UserInfo from './UserInfo';
import ChatList from './ChatList';

const List = () => {
    return (
        <div className="flex h-full flex-[1] flex-col">
            <UserInfo />

            <ChatList />
        </div>
    );
};

export default List;
