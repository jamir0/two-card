import {
    dealCards,
    generateCard,
    generateDeckOfCards, generatePlayersCards,
    generatePlayersNames,
    getCardsPairs, getPairsCount, getPlayers
} from "./game";
import {
    CardEntity,
    CardsPairs,
    DeckOfCards
} from "../types";
import {
    expectedDecks,
    randomCards1,
    randomCards2,
    randomCards3,
    expectedPairsForCards1,
    expectedPairsForCards2,
    expectedPairsForCards3,
    expectedPairsForCards4,
    expectedDealResults
} from "../mocks/mocks";

describe("Game Toolbox", () => {
    describe("#generateDeckOfCards", () => {
        const cases = [[36], [54]];
        test.each(cases)("creates correct set for %s cards", (cardsCount: DeckOfCards) => {
            const expectedKey = cardsCount.toString(10);
            expect(generateDeckOfCards(cardsCount)).toEqual(expectedDecks[expectedKey]);
        });
    });

    describe("#generatePlayersNames", () => {
        test("returns correct players names", () => {
            const players = [0, 1, 2];
            const expected = [
                "Player 1",
                "Player 2",
                "Player 3"
            ];
            expect(generatePlayersNames(players)).toEqual(expected);
        });
    });

    describe("#generateCard", () => {
        let deck: CardEntity[];

        beforeEach(() => {
            deck = generateDeckOfCards(DeckOfCards.SHORT);
        });
        test("return random card from the deck", () => {
            const copyOfDeck = [...deck];
            const card = generateCard(copyOfDeck);
            expect(copyOfDeck).toHaveLength(35);
            expect(deck).toContain(card);
            expect(copyOfDeck).not.toContain(card);
        });

    });

    describe("#getPlayers", () => {
        test("returns correct list of players", () => {
            const playersCount = 5;
            expect(getPlayers(
                expectedDecks["36"],
                7,
                playersCount
            )).toHaveLength(playersCount);
        });
    });

    describe("#dealCards", () => {
        test("test", () => {
            const playersCount = 2;
            const cardsPerPlayer = 7;
            const result = dealCards(playersCount, cardsPerPlayer, expectedDecks["36"]);
            expect(result.players).toBeDefined();
            expect(result.players).toHaveLength(playersCount);
            expect(result.winners).toBeDefined();
        });
    });

    describe("#getCardsPairs", () => {
        const cases = [
            [0, randomCards1, expectedPairsForCards1],
            [1, randomCards2, expectedPairsForCards2],
            [2, randomCards3, expectedPairsForCards3]
        ];
        test.each(cases)(
            "returns correctly card's pairs %i",
            (count: number, cards: CardEntity[], expected: CardsPairs) => {
                const result = getCardsPairs(cards);
                expect(result).toEqual(expected);
            });
    });

    describe("#getPairsCount", () => {
        const cases = [
            [0, expectedPairsForCards1],
            [1, expectedPairsForCards2],
            [2, expectedPairsForCards3],
            [3, expectedPairsForCards4]
        ];
        test.each(cases)(
            "returns correct number of scores=%i", (score: number, pairs: CardsPairs) => {
                expect(getPairsCount(pairs)).toEqual(score);
            }
        );
    });

    describe("#generatePlayersCards", () => {
        test("returns correct number of cards per player", () => {
            const cardsPerPlayer = 5;
            const result = generatePlayersCards(expectedDecks["36"], cardsPerPlayer);
            expect(result.cards).toHaveLength(cardsPerPlayer);
            expect(result.pairs).toBeDefined();
            expect(result.pairsCount).toBeDefined();
        });
    });

    describe("#getScrore", () => {
        test("returns correct list of winners", () => {

        });
    });
});
