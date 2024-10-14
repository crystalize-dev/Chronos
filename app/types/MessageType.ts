import { StaticImageData } from 'next/image';

export type MessageType = {
    id: string;
    sender: string;
    senderImage?: StaticImageData;
    content: string;
    image?: StaticImageData;
};
