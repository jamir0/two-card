import { CardSuits, CardValues } from "./types";

export const CARD_SUITES: CardSuits[] = [
    CardSuits.DIAMOND,
    CardSuits.HEART,
    CardSuits.CLUB,
    CardSuits.SPADE
];

export const CARD_VALUES: CardValues[] = [
    CardValues.TWO,
    CardValues.THREE,
    CardValues.FOUR,
    CardValues.FIVE,
    CardValues.SIX,
    CardValues.SEVEN,
    CardValues.EIGHT,
    CardValues.NINE,
    CardValues.TEN,
    CardValues.JACK,
    CardValues.QUEEN,
    CardValues.KING,
    CardValues.ACE
];

export const CARD_SUITES_STYLES_MAP = {
    [CardSuits.HEART]: {
        colorStyle: "redSuit",
    },
    [CardSuits.CLUB]: {
        colorStyle: "blackSuit"
    },
    [CardSuits.SPADE]: {
        colorStyle: "blackSuit"
    },
    [CardSuits.DIAMOND]: {
        colorStyle: "redSuit"
    }
};
