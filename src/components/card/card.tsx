import React, { memo } from "react";
import classnames from "classnames";
import { CardEntity } from "../../types";
import { CARD_SUITES_STYLES_MAP } from "../../constants";
import styles from "./card.module.css";

export interface Props extends CardEntity{}

export const Card = ({ suit, value, color }: Props) => {
    const suitStyle = CARD_SUITES_STYLES_MAP[suit];
    const clsName = `${suit}Suit`;
    const inlineStyle = typeof color !== "undefined" ? {
        borderColor: `#${color}`
    }: {};
    return (
        <div
            className={classnames(
                styles.cardItem,
                styles[suitStyle.colorStyle],
                styles.shadow
            )}
            style={inlineStyle}
        >
            <div className={styles[clsName]}>{value}</div>
        </div>
    );
};

export default memo(Card);
