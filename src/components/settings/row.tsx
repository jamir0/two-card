import React, { memo } from "react";
import styles from "./settings.module.css";

export interface Props{
    label: string;
    value: string;
}

export const SettingsRow = ({ label, value }: Props) => (
    <div className={styles.row}>
        <span className={styles.label}>{`${label}:`}</span>
        <span className={styles.value}>{value}</span>
    </div>
);

export default memo(SettingsRow);
