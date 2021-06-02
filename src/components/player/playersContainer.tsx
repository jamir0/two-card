import React, { memo } from "react";
import Player from "./player";
import { PlayerEntity } from "../../types";
import styles from "./player.module.css";

export interface Props {
    players: PlayerEntity[];
}

export const PlayersContainer = ({ players }: Props) => {
    if (!players || players.length === 0) {
        return null;
    }

    return (
        <div className={styles.playersContainer}>
            {players.map(player => (
                <Player
                    key={player.name}
                    {...player}
                />
            ))}
        </div>
    );
};

export default memo(PlayersContainer);

export {
    Player
};
