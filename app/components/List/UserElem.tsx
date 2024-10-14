import { UserType } from '@/app/types/UserType';
import Image from 'next/image';
import React from 'react';
import defaultAvatar from '../../img/defaultAvatar.svg';

interface UserElemProps {
    user: UserType;
}

const UserElem = ({ user }: UserElemProps) => {
    return (
        <div className="group flex cursor-pointer items-center gap-4 rounded-md bg-light-object p-4 transition-all hover:bg-primary dark:bg-dark-object">
            <div className="relative !size-12 min-h-12 min-w-12 rounded-full transition-all dark:bg-zinc-500 group-hover:dark:!bg-transparent">
                <Image
                    alt="userAvatar"
                    width={500}
                    height={500}
                    priority
                    className="h-full w-full"
                    src={user?.image ? user.image : defaultAvatar}
                />
            </div>

            <div className="flex w-full flex-col">
                <h1 className="text-lg">
                    {user?.name ? user.name : user?.email}
                </h1>

                <p className="text-sm text-zinc-400 transition-all group-hover:text-zinc-700">
                    Some last message!
                </p>
            </div>
        </div>
    );
};

export default UserElem;
