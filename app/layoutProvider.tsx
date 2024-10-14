'use client';
import React, { useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { SessionProvider, signOut } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import ThemeToggler from './components/UI/ThemeToggler';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './components/Icon/Icon';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname();

    const isLoginPage =
        ['/login', '/forgot-password', '/register'].includes(path) ||
        path.includes('reset-password');

    return (
        <SessionProvider>
            <ThemeProvider>
                <DataProvider>
                    <Toaster />

                    {!isLoginPage && (
                        <Icon
                            onClick={() => signOut()}
                            className="absolute right-4 top-4 z-50 text-white"
                            icon="quit"
                        />
                    )}

                    <ThemeToggler
                        className={`absolute top-4 z-50 ${!isLoginPage ? 'right-12' : 'right-4'}`}
                    />

                    <AnimatePresence>
                        <motion.main
                            layoutId="mainWindow"
                            className={`border-light-border dark:border-dark-border flex h-full w-full items-center border-solid bg-light-bg backdrop-blur-md lg:rounded-xl lg:border dark:bg-dark-bg ${isLoginPage ? 'lg:h-fit lg:w-fit lg:min-w-96' : '!h-[90vh] !w-[90vw]'}`}
                        >
                            {children}
                        </motion.main>
                    </AnimatePresence>
                </DataProvider>
            </ThemeProvider>
        </SessionProvider>
    );
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

    useEffect(() => {
        // Проверка локального хранилища на наличие сохраненной темы
        const savedTheme = localStorage.getItem('theme') as
            | 'dark'
            | 'light'
            | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            // Проверка настроек системы пользователя
            const userPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            const initialTheme = userPrefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            document.documentElement.classList.add(initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        if (theme) {
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            document.documentElement.classList.remove(theme);
            document.documentElement.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider>{children}</SessionProvider>;
};
