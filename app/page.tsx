'use client';
import { useState } from 'react';
import Chat from './components/Chat/Chat';
import Detail from './components/Detail/Detail';
import List from './components/List/List';
import ModalSearchNewUser from './components/Modal/ModalSearchNewUser';
import { ModelSearchContext } from './context/ModalContext';

export default function Home() {
    const [visible, setVisible] = useState(false);

    return (
        <ModelSearchContext.Provider value={{ visible, setVisible }}>
            <div className="flex h-full w-full dark:text-white">
                <ModalSearchNewUser />

                <List />

                <Chat />

                <Detail />
            </div>
        </ModelSearchContext.Provider>
    );
}
