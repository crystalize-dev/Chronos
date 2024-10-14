import Image from 'next/image';
import React from 'react';
import Icon from '../Icon/Icon';
import defaultAvatar from '../../img/defaultAvatar.svg';

const UserInfo = () => {
    return (
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
                <h1>John doe</h1>
            </div>
            <div className="flex items-center gap-4">
                <Icon icon="more" />
                <Icon icon="video" />
                <Icon icon="pen" />
            </div>
        </div>
    );
};

export default UserInfo;
