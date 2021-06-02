import React, { memo } from "react";
import { CardEntity } from "../../types";
import styles from "./card.module.css";
import Card from "./card";

export interface Props {
    cards: CardEntity[];
}

const CardsContainer = ({ cards }: Props) => (
    <div className={styles.cardsContainer}>
        {cards.map(card => <Card key={`${card.suit}-${card.value}`} {...card} />)}
    </div>
);
export {
    CardsContainer,
    Card
};
export default memo(CardsContainer);
