import { UserType } from '@/app/types/UserType';
import React from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import defaultAvatar from '../../img/defaultAvatar.svg';
import { motion } from 'framer-motion';

interface UserAddElementProps {
    user: UserType;
}

const UserAddElem = ({ user }: UserAddElementProps) => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            className="flex w-full items-center justify-between gap-8 rounded-xl p-4 hover:bg-light-bg dark:hover:bg-white/20"
        >
            <div className="flex items-center gap-4">
                <div className="relative size-14 rounded-full dark:bg-zinc-500">
                    <Image
                        alt="userAvatar"
                        src={user.image ? user.image : defaultAvatar}
                        width={500}
                        height={500}
                        priority
                        className="h-full w-full"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-lg">{user.name}</h1>
                    <p className="text-sm text-zinc-500">{user.email}</p>
                </div>
            </div>

            <Button
                type="button"
                variant="colored"
                buttonClassName="transition-all hover:border-primary hover:bg-transparent hover:text-primary"
            >
                Add Friend
            </Button>
        </motion.div>
    );
};

export default UserAddElem;
