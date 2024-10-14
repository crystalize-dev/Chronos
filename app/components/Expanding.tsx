import { motion } from 'framer-motion';
import React from 'react';
import Icon from './Icon/Icon';

interface ExpandingProps {
    isCollapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    children?: React.ReactNode;
}

const Expanding = ({
    children,
    isCollapsed,
    title,
    setCollapsed
}: ExpandingProps) => {
    return (
        <div className="flex w-full flex-col">
            <div
                className="flex w-full cursor-pointer select-none items-center justify-between gap-4 rounded-lg bg-light-bg px-4 py-2 dark:bg-dark-bg"
                onClick={() => setCollapsed(!isCollapsed)}
            >
                <h1 className="text-lg font-bold">{title}</h1>
                <Icon
                    icon={'arrowDown'}
                    className={`!h-8 !w-8 rounded-full bg-light-object p-2 transition-all dark:bg-dark-object ${isCollapsed && 'rotate-180'}`}
                />
            </div>

            <motion.div
                initial={
                    isCollapsed
                        ? { height: 0, opacity: 0 }
                        : { height: 'auto', opacity: 1 }
                }
                animate={
                    isCollapsed
                        ? { height: 0, opacity: 0 }
                        : { height: 'auto', opacity: 1 }
                }
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }} // плавная анимация
                style={{ overflow: 'hidden' }} // скрываем содержимое, пока высота 0
                className="flex flex-col gap-2 py-2"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Expanding;
