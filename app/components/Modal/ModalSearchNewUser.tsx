'use client';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { ModelSearchContext } from '@/app/context/ModalContext';
import Input from '../UI/Input';
import Icon from '../Icon/Icon';
import UserAddElem from './UserAddElem';
import { UserType } from '@/app/types/UserType';
import { AnimatePresence } from 'framer-motion';

const ModalSearchNewUser = () => {
    const users: UserType[] = [
        {
            name: 'John Doe',
            email: 'johndoe@example.com',
            blockedUsersId: [],
            userChats: []
        },
        {
            name: 'Amily',
            email: 'amily@example.com',
            blockedUsersId: [],
            userChats: []
        }
    ];

    const [searchedUsername, setSearchedUsername] = useState('');

    const { visible, setVisible } = useContext(ModelSearchContext);

    const submit = (e: FormEvent) => {
        e.preventDefault();
    };

    const getFilteredUsers = () => {
        if (!searchedUsername) return users;
        else {
            return users.filter(
                (user) =>
                    user.name
                        .toLowerCase()
                        .includes(searchedUsername.toLowerCase()) ||
                    user.email
                        .toLocaleLowerCase()
                        .includes(searchedUsername.toLocaleLowerCase())
            );
        }
    };

    return (
        <ModalWrapper setVisible={setVisible} visible={visible}>
            <form
                onMouseDown={(e) => e.stopPropagation()}
                onSubmit={submit}
                className="relative flex h-full min-h-96 w-full min-w-96 flex-col items-center gap-4 bg-light-bg p-8 lg:h-fit lg:w-fit lg:rounded-xl dark:bg-zinc-900"
            >
                <Icon
                    icon="close"
                    onClick={() => setVisible(false)}
                    className="absolute right-4 top-4 !size-7 text-white transition-all hover:rotate-90 hover:scale-125 lg:-right-8 lg:-top-8"
                />

                <h1 className="text-2xl font-bold text-white">
                    Search for new friend!
                </h1>

                <Input
                    type="text"
                    icon="search"
                    onType={setSearchedUsername}
                    placeholder="Find a friend"
                    className="w-full"
                    inputClassName="h-full"
                    placeholderType="classic"
                />

                <div className="flex w-full grow flex-col gap-4">
                    <AnimatePresence>
                        {getFilteredUsers().map((user) => (
                            <UserAddElem key={user.email} user={user} />
                        ))}
                    </AnimatePresence>
                </div>
            </form>
        </ModalWrapper>
    );
};

export default ModalSearchNewUser;
