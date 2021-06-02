import React, { memo } from "react";
import { CardsDealResult, SettingsState } from "../../types";
import PlayersContainer from "../player/playersContainer";
import { Results } from "../results/results";

export interface Props extends CardsDealResult{
    settings: SettingsState;
}

export const Desk = ({ players, winners, settings}: Props) => {
    return (
        <div>
            <PlayersContainer players={players} />
            <Results winners={winners} />
        </div>
    );
};

export default memo(Desk);
