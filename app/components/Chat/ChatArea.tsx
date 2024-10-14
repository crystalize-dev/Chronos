'use client';
import React, { useEffect, useRef } from 'react';
import imageBg from '../../../public/bg.jpg';
import MessageElem from './MessageElem';
import { MessageType } from '@/app/types/MessageType';

const ChatArea = () => {
    const endRef = useRef<HTMLDivElement | null>(null); // Указан правильный тип
    const messages: MessageType[] = [
        { id: '1', sender: 'Alice', content: 'Hello, how are you?' },
        {
            id: '2',
            sender: 'Bob',
            content:
                "I'm good, thanks! How about you? 'a;sdlf ;'asdf ';asdl f;'as'df las';dfl a's;dl fa's;d lf'a;sldkj sdklfg jsldkf gjslkd;f gsl;dfj gskldf gsdkljf ghskdjf ghskdjf hksljd fhgksjd fhjksd fkgjs dkjfgh sjkdfhgjksdf hkjsd hkjs hgksjd gskjd fkj ghskjdf gksjdf ghjk"
        },
        {
            id: '1',
            sender: 'Bob',
            content: "I'm feeling a bit stressed. I need some rest.",
            image: imageBg
        }
    ];

    useEffect(() => {
        if (!endRef || !endRef.current) return;
        endRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="scrollable flex w-full grow flex-col gap-4 p-4">
            {messages.map((message) => (
                <MessageElem key={message.content} message={message} />
            ))}
            <div className="h-0 w-full" ref={endRef} />
        </div>
    );
};

export default ChatArea;
