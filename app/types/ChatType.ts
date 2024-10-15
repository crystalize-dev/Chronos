import { MessageType } from './MessageType';

export type ChatType = {
    id?: string;
    recieverId?: string;
    lastMesa?: string;
    updatedAt?: Date;
    isSeen?: boolean;
    messages: MessageType[];
};
