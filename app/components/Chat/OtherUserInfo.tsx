import { UserType } from '@/app/types/UserType';
import Image from 'next/image';
import React from 'react';
import defaultAvatar from '../../img/defaultAvatar.svg';
import Icon from '../Icon/Icon';

interface UserElemProps {
    user?: UserType;
}

const OtherUserInfo = ({ user }: UserElemProps) => {
    return (
        <div className="border-light-border dark:border-dark-border !h-20 w-full border-b border-solid">
            <div className="flex !h-20 w-full items-center justify-between p-4">
                <div className="flex h-full w-fit items-center gap-4">
                    <div className="relative size-12 rounded-full dark:bg-zinc-500">
                        <Image
                            alt=""
                            src={defaultAvatar}
                            width={500}
                            height={500}
                            className="h-full w-full"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg">John doe</h1>
                        <p className="text-sm text-zinc-400">
                            Some description
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Icon icon="phone" />
                    <Icon icon="video" />
                    <Icon icon="info" />
                </div>
            </div>
        </div>
    );
};

export default OtherUserInfo;
