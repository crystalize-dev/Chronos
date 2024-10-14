'use client';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import TextareaAutosize from 'react-textarea-autosize';
import React, { useContext, useState } from 'react';
import Icon from '../Icon/Icon';
import Button from '../UI/Button';
import { ThemeContext } from '@/app/context/ThemeContext';

const InputArea = () => {
    const [message, setMessage] = useState('');
    const [isOpenedEmojiPicker, setIsOpenedEmojiPicker] = useState(false);

    const { theme } = useContext(ThemeContext);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                // Shift + Enter: вставляем новую строку
                return;
            }
            // Обычный Enter: отменяем стандартное поведение и вызываем submit
            e.preventDefault();
            submit();
        }
    };

    const submit = () => {
        setMessage('');
    };

    return (
        <div className="border-light-border dark:border-dark-border flex h-fit w-full items-center gap-4 border-t border-solid p-4">
            <Icon
                icon="image"
                className="relative bottom-2 !size-8 self-end p-0 text-white"
            />
            <Icon
                icon="microphone"
                className="relative bottom-2 !size-8 self-end p-0 text-white"
            />

            <TextareaAutosize
                placeholder="Enter a message..."
                className="scrollable h-12 max-h-56 grow !resize-none rounded-md bg-light-object p-3 outline-none dark:bg-dark-object"
                id="text_area"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <div className="relative bottom-2 self-end">
                <Icon
                    icon="emoji"
                    className="!size-8 p-0 text-white"
                    onClick={
                        isOpenedEmojiPicker
                            ? () => setIsOpenedEmojiPicker(false)
                            : () => setIsOpenedEmojiPicker(true)
                    }
                />

                <EmojiPicker
                    open={isOpenedEmojiPicker}
                    className="!absolute -top-full -translate-y-full"
                    theme={theme as Theme | undefined}
                    onEmojiClick={(emoji: EmojiClickData) =>
                        setMessage(`${message}${emoji.emoji}`)
                    }
                />
            </div>

            <Button
                onClick={submit}
                type="button"
                variant="colored"
                className="!h-fit !w-fit !min-w-fit self-end"
                buttonClassName="!h-12 px-6"
            >
                Send
            </Button>
        </div>
    );
};

export default InputArea;
