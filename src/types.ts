
export enum DeckOfCards {
    SHORT = 36,
    FULL = 54
}

export interface SettingsState {
    playersCount: number;
    cardsCount: DeckOfCards;
    cardsPerPlayer: number;
}
export enum CardSuits {
    DIAMOND = "diamond",
    HEART = "heart",
    CLUB = "club",
    SPADE = "spade"
}

export enum CardValues {
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "Jack",
    QUEEN = "Queen",
    KING = "King",
    ACE = "Ace"
}

export interface CardEntity {
    suit: CardSuits;
    value: CardValues;
}
export interface CardsPairs {
    [cardValue: string]: CardEntity[];
}

export interface Player {
    cards: CardEntity[];
    name: string;
    pairs: CardsPairs;
    pairsCount: number;
}

export interface CardsDealResult {
    players: Player[];
    winners?: Player[];
}
