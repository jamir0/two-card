import React, { memo } from "react";
import { SettingsState } from "../../types";

export interface Props {
    settings: SettingsState;
    onChange: (newSettings: Partial<SettingsState>) => void;
}

export const Settings = ({ settings, onChange }: Props) => {
    return (
        <div>
            <div>Settings:</div>
            <ul>
                <li><b>Players count:</b><span>{settings.playersCount}</span></li>
                <li><b>Card count:</b><span>{settings.cardsCount}</span></li>
                <li><b>Cards per player:</b><span>{settings.cardsPerPlayer}</span></li>
            </ul>
        </div>
    );
};

export default memo(Settings);
