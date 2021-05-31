import { identity, map, pipe, times, groupBy, reduce } from "ramda";
import {
    CardEntity,
    CardsDealResult,
    CardsPairs,
    DeckOfCards,
    Player
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
    (pairs: CardsPairs) => Object.keys(pairs).reduce(
        (acc: CardsPairs, pairName: string) => {
            const pair = pairs[pairName];
            return pair.length >= 2
                ? { ...acc, [pairName]: pair }
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
    reduce((count: number, pair: CardEntity[]) => count + Math.floor(pair.length / 2),
        0
    ),
)(Object.values(pairs));

const generatePlayersCards = (deckOfCards: CardEntity[], cardsPerPlayer: number): Partial<Player> => {
    const cards = pipe(
        times(identity),
        (cards) => cards.map(() => generateCard(deckOfCards))
    )(cardsPerPlayer);
    const pairs = getCardsPairs(cards);
    const pairsCount = getPairsCount(pairs);
    return {
        cards,
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
const getScore = (players: Player[]) => reduce(
    (winners: Player[], player: Player) => {
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
            } as Player)
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
    dealCards,
    generateCard,
    generateDeckOfCards,
    generatePlayersCards,
    generatePlayersNames,
    getCardsPairs,
    getScore,
    getPairsCount,
    getPlayers
};
