'use client';
import React, { useState } from 'react';
import Expanding from '../Expanding';

const Settings = () => {
    const [settingsExpanded, setSettingsExpanded] = useState(true);
    const [photosExpanded, setPhotosExpanded] = useState(true);
    const [filesExpanded, setFilesExpanded] = useState(true);

    return (
        <div className="scrollable flex w-full grow flex-col gap-4">
            <Expanding
                setCollapsed={setSettingsExpanded}
                isCollapsed={settingsExpanded}
                title="Chat settings"
            >
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
            </Expanding>

            <Expanding
                setCollapsed={setPhotosExpanded}
                isCollapsed={photosExpanded}
                title="Shared photos"
            >
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
            </Expanding>

            <Expanding
                setCollapsed={setFilesExpanded}
                isCollapsed={filesExpanded}
                title="Shared files"
            >
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
                <p>sometext</p>
            </Expanding>
        </div>
    );
};

export default Settings;
