import React from 'react';
import UserDetails from './UserDetails';
import Settings from './Settings';
import Button from '../UI/Button';
import { UserType } from '@/app/types/UserType';

const Detail = () => {
    const user: UserType = {
        email: 'man2123@mail.ru'
    };

    return (
        <div className="flex h-full flex-[1] flex-col">
            <UserDetails user={user} />

            <div className="flex flex-grow flex-col overflow-hidden p-4">
                <div className="flex-grow overflow-y-auto">
                    <Settings />
                </div>

                <div className="mt-4">
                    <Button
                        type="button"
                        variant="colored"
                        className="w-full"
                        buttonClassName="bg-red-500 hover:border-red-500 hover:bg-transparent hover:text-red-500"
                    >
                        Block user
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
