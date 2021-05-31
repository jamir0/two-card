import React, { memo } from "react";
import { CardsDealResult, SettingsState } from "../../types";

export interface Props extends CardsDealResult{
    settings: SettingsState;
}

export const Desk = ({ players, winners, settings}: Props) => {
    return (
        <div>
            <div>Players List</div>
            <div>Results</div>
        </div>
    );
};

export default memo(Desk);
