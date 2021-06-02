import React, { memo } from "react";
import { PlayerEntity } from "../../types";
import styles from "./results.module.css";

export interface Props {
    winners?: PlayerEntity[];
}

const getWinnersNames = (winners: PlayerEntity[]) => winners
    .map(winner => winner.name)
    .join(", ");

const Results = ({ winners }: Props) => {
    if (!winners) {
        return null;
    }
    const message = winners.length === 0
        ? "No winners"
        : `Winners: ${getWinnersNames(winners)} with score=${winners[0].pairsCount}`;
    return (
        <div className={styles.resultsContainer}>
            {message}
        </div>
    );
};

export {
    Results,
    getWinnersNames
};

export default memo(Results);
