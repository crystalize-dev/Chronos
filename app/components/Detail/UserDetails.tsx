import Image from 'next/image';
import React from 'react';
import defaultAvatar from '../../img/defaultAvatar.svg';
import { UserType } from '@/app/types/UserType';

interface UserElemProps {
    user: UserType;
}

const UserDetails = ({ user }: UserElemProps) => {
    return (
        <div className="border-light-border dark:border-dark-border flex h-fit w-full flex-col items-center gap-2 border-b border-solid p-4">
            <div className="relative size-24 min-h-24 min-w-24 rounded-full dark:bg-zinc-500">
                <Image
                    alt="userAvatar"
                    src={user?.image ? user.image : defaultAvatar}
                    width={500}
                    height={500}
                    priority
                    className={'h-full w-full'}
                />
            </div>
            <h1 className="text-lg">John Doe</h1>
            <p className="text-sm text-zinc-500">Some description</p>
        </div>
    );
};

export default UserDetails;
