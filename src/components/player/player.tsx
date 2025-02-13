import React, { memo } from "react";
import { PlayerEntity } from "../../types";
import styles from "./player.module.css";
import CardContainer from "../card/cardsContainer";

export interface Props extends PlayerEntity{}

const Player = ({ name, cards }: Props) => {
    return (
        <div className={styles.playerItem}>
            <div className={styles.name}>{name}</div>
            <CardContainer cards={cards} />
        </div>
    );
};

export {
    Player,
    CardContainer
};

export default memo(Player);
