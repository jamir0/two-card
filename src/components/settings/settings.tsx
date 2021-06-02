import React, { memo } from "react";
import { SettingsState } from "../../types";
import styles from "./settings.module.css";
import SettingsRow from "./row";

export interface Props {
    settings: SettingsState;
    onChange: (newSettings: Partial<SettingsState>) => void;
}

interface ConfigItem {
    label: string;
    propName: keyof SettingsState;
}

const config: ConfigItem[] = [
    {
        label: "Player's count",
        propName: "playersCount"
    },
    {
        label: "Card's count",
        propName: "cardsCount"
    },
    {
        label: "Cards per player",
        propName: "cardsPerPlayer"
    }
];

const getSetting = (settings: SettingsState, propName: keyof SettingsState) => {
    const value = settings[propName];
    return value ? value.toString(10) : "";
};

export const Settings = ({ settings, onChange }: Props) => {
    return (
        <div className={styles.settingsPage}>
            <h3>Settings:</h3>
            {config.map((cfg => (
                <SettingsRow
                    key={cfg.label}
                    label={cfg.label}
                    value={getSetting(settings, cfg.propName)}
                />
            )))}
        </div>
    );
};

export default memo(Settings);
