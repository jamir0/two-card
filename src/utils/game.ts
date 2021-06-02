import { identity, map, pipe, times, groupBy, reduce, find, propEq } from "ramda";
import {
    CardEntity,
    CardsDealResult,
    CardsPairs,
    DeckOfCards, Pair,
    PlayerEntity
} from "../types";
import { CARD_SUITES, CARD_VALUES } from "../constants";

const generateDeckOfCards = (cardsCount: DeckOfCards) => {
    const valuesOffset = cardsCount === DeckOfCards.SHORT ? 4 : 0;
    const values = CARD_VALUES.slice(valuesOffset);
    return CARD_SUITES.reduce(
        (deck, curSuit) => values.reduce(
            (acc, curValue) => acc.concat({
                suit: curSuit,
                value: curValue
            }),
            deck
        ),
        [] as CardEntity[]
    );
};

const generateCard = (deckOfCards: CardEntity[]): CardEntity => {
    const cardIndex = Math.floor(Math.random() * deckOfCards.length);
    const [ card ] = deckOfCards.splice(cardIndex, 1);
    return card;
};

const generatePlayersNames = map((item: number) => `Player ${item + 1}`);

const getCardsPairs = (cards: CardEntity[]) => pipe(
    groupBy((item: CardEntity) => item.value.toString()),
    pairs => Object.keys(pairs).reduce(
        (acc: CardsPairs, pairName: string) => {
            const pair = pairs[pairName];
            return pair.length >= 2
                ? {
                    ...acc,
                    [pairName]: {
                        cards: pair,
                        color: generateColor()
                    }
                }
                : acc;
        },
        {}
    )
)(cards);

/**
 * Returns count of pairs
 *
 * @param pairs
 *
 * @note if the list length 2 then has been found 1 pair, if 4 - 2 pairs.
 */
const getPairsCount = (pairs: CardsPairs) => pipe(
    reduce((count: number, pair: Pair) => count + Math.floor(pair.cards.length / 2),
        0
    ),
)(Object.values(pairs));

const generateColor = () => Math.floor(Math.random()*16777215).toString(16);

const addColorOfPair = (cards: CardEntity[], pairs: CardsPairs) => cards.map(card => {
    const curPair = pairs[card.value];
    if (!curPair) {
        return card;
    }

    const fromPair = find(propEq("suit", card.suit))(curPair.cards);
    if (!fromPair) {
        return card;
    }

    return {
        ...card,
        color: curPair.color
    };

});

const generatePlayersCards = (deckOfCards: CardEntity[], cardsPerPlayer: number): Partial<PlayerEntity> => {
    const cards = pipe(
        times(identity),
        (cards) => cards.map(() => generateCard(deckOfCards))
    )(cardsPerPlayer);
    const pairs = getCardsPairs(cards);
    const pairsCount = getPairsCount(pairs);
    return {
        cards: addColorOfPair(cards, pairs),
        pairs,
        pairsCount
    };
};

/**
 * Returns winners
 * @param players
 *
 * @note Could be situation when exists several winners
 */
const getScore = (players: PlayerEntity[]) => reduce(
    (winners: PlayerEntity[], player: PlayerEntity) => {
        if (winners.length === 0 || winners[0].pairsCount < player.pairsCount) {
            winners = [player];
        } else if (winners[0].pairsCount === player.pairsCount) {
            winners.push(player);
        }

        return winners;
    },
    []
)(players);

const getPlayers = (deckOfCards: CardEntity[], cardsPerPlayer: number, playersCount: number) => {
    const copyOfDeck = [...deckOfCards];

    return pipe(
        times(identity),
        generatePlayersNames,
        players => players.map(
            playerName => ({
                name: playerName,
                ...generatePlayersCards(copyOfDeck, cardsPerPlayer)
            } as PlayerEntity)
        ),
    )(playersCount);
};

const dealCards = (playersCount: number, cardsPerPlayer: number, deckOfCards: CardEntity[]): CardsDealResult => {
    const copyOfDeck = [...deckOfCards];
    const players = getPlayers(copyOfDeck, cardsPerPlayer, playersCount);
    const winners = getScore(players);

    return {
        players,
        winners
    };
};


export {
    addColorOfPair,
    dealCards,
    generateCard,
    generateColor,
    generateDeckOfCards,
    generatePlayersCards,
    generatePlayersNames,
    getCardsPairs,
    getScore,
    getPairsCount,
    getPlayers
};
