import { MessageType } from '@/app/types/MessageType';
import Image from 'next/image';
import React from 'react';
import defaultAvatar from '../../img/defaultAvatar.svg';

interface MessageProps {
    message: MessageType;
}

const MessageElem = ({ message }: MessageProps) => {
    const isSendByMe = message.id === '1';

    return (
        <div
            className={`flex w-fit max-w-[70%] gap-4 ${isSendByMe && 'self-end'}`}
        >
            {!isSendByMe && (
                <div className="relative size-8 min-h-8 min-w-8 rounded-full dark:bg-zinc-500">
                    <Image
                        src={
                            message.senderImage
                                ? message.senderImage
                                : defaultAvatar
                        }
                        alt="userAvatar"
                        width={500}
                        height={500}
                        className="h-full w-full"
                    />
                </div>
            )}

            <div className={`flex w-full flex-col gap-1`}>
                {message.image && (
                    <div className="relative mb-2 w-full overflow-hidden rounded-lg">
                        <Image
                            alt="pinnedImage"
                            src={message.image}
                            width={2000}
                            height={2000}
                            className="h-full w-full"
                        />
                    </div>
                )}
                <div
                    className={`flex w-fit flex-col gap-1 rounded-md p-4 ${isSendByMe ? 'bg-primary text-white' : 'bg-black/10 dark:bg-black/40'}`}
                >
                    {isSendByMe ? (
                        <>
                            <h1>{message.content}</h1>
                        </>
                    ) : (
                        <>
                            <h1>{message.content}</h1>
                        </>
                    )}
                </div>
                <p className={`text-sm text-zinc-500`}>1 minute ago</p>
            </div>
        </div>
    );
};

export default MessageElem;
