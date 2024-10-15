'use client';
import React, { useContext } from 'react';
import Input from '../UI/Input';
import Icon from '../Icon/Icon';
import UserElem from './UserElem';
import { UserType } from '@/app/types/UserType';
import { ModelSearchContext } from '@/app/context/ModalContext';

const ChatList = () => {
    const user: UserType = {
        email: 'man2123@mail.ru',
        blockedUsersId: [],
        userChats: []
    };

    const { setVisible } = useContext(ModelSearchContext);

    return (
        <div className="flex h-[calc(100%-5rem)] w-full flex-col gap-4 rounded-bl-xl p-4">
            <div className="flex h-fit items-center justify-between gap-4">
                <Input
                    type="text"
                    icon="search"
                    placeholder="Find someone"
                    className="!h-10 !w-[unset] grow"
                    inputClassName="h-full"
                    placeholderType="classic"
                />
                <Icon
                    onClick={() => setVisible(true)}
                    className="!size-10 rounded-md bg-light-object p-2 hover:opacity-60 dark:bg-dark-object"
                    icon="plus"
                />
            </div>

            <div className="scrollable flex h-full w-full flex-col gap-2 rounded-bl-xl">
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} />
                <UserElem user={user} /> <UserElem user={user} />{' '}
                <UserElem user={user} /> <UserElem user={user} />{' '}
                <UserElem user={user} /> <UserElem user={user} />{' '}
                <UserElem user={user} /> <UserElem user={user} />
            </div>
        </div>
    );
};

export default ChatList;
