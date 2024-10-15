'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface ModalWrapperProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

export const ModalWrapper = ({
    visible,
    setVisible,
    children
}: ModalWrapperProps) => {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'just' }}
                    onMouseDown={() => setVisible(false)}
                    className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black/80 lg:rounded-xl lg:px-[25%]"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
