import {
    dealCards,
    generateCard,
    generateDeckOfCards, generatePlayersCards,
    generatePlayersNames,
    getCardsPairs, getPairsCount, getPlayers
} from "./game";
import {
    CardEntity,
    CardsDealResult,
    CardsPairs,
    CardSuits,
    CardValues,
    DeckOfCards
} from "../types";

interface ExpectedDataSet {
    [cardsCount: string]: CardEntity[]
}
const expectedDecks: ExpectedDataSet = {
    "36" : [
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.KING
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.ACE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.KING
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.ACE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.KING
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.ACE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.KING
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.ACE
        }
    ] as CardEntity[],
    "54": [
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.TWO
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.THREE
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.FOUR
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.FIVE
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.KING
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.ACE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.TWO
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.THREE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.FOUR
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.FIVE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.KING
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.ACE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.TWO
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.THREE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.FOUR
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.FIVE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.KING
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.ACE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.TWO
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.THREE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.FOUR
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.FIVE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.SIX
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.EIGHT
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.TEN
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.JACK
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.QUEEN
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.KING
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.ACE
        }
    ] as CardEntity[]
};

const randomCards1 = [
    {
        suit: CardSuits.HEART,
        value: CardValues.KING
    },{
        suit: CardSuits.SPADE,
        value: CardValues.ACE
    },{
        suit: CardSuits.DIAMOND,
        value: CardValues.JACK
    },{
        suit: CardSuits.SPADE,
        value: CardValues.EIGHT
    },{
        suit: CardSuits.HEART,
        value: CardValues.SEVEN
    },{
        suit: CardSuits.DIAMOND,
        value: CardValues.QUEEN
    },{
        suit: CardSuits.CLUB,
        value: CardValues.TEN
    }
];
const randomCards2 = [{suit:CardSuits.CLUB,value:CardValues.SEVEN},{suit:CardSuits.DIAMOND,value:CardValues.TEN},{suit:CardSuits.DIAMOND,value:CardValues.SIX},{suit:CardSuits.CLUB,value:CardValues.NINE},{suit:CardSuits.DIAMOND,value:CardValues.EIGHT},{suit:CardSuits.CLUB,value:CardValues.JACK},{suit:CardSuits.DIAMOND,value:CardValues.SEVEN}];
const randomCards3 = [{suit:CardSuits.DIAMOND,value:CardValues.NINE},{suit:CardSuits.HEART,value:CardValues.ACE},{suit:CardSuits.SPADE,value:CardValues.KING},{suit:CardSuits.SPADE,value:CardValues.NINE},{suit:CardSuits.HEART,value:CardValues.EIGHT},{suit:CardSuits.DIAMOND,value:CardValues.KING},{suit:CardSuits.HEART,value:CardValues.QUEEN}];
const expectedPairsForCards1: CardsPairs = {};
const expectedPairsForCards2: CardsPairs = {
    [CardValues.SEVEN]: [
        {
            suit: CardSuits.CLUB,
            value: CardValues.SEVEN
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.SEVEN
        }
    ]
};
const expectedPairsForCards3: CardsPairs = {
    [CardValues.NINE]: [
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.NINE
        }
    ],
    [CardValues.KING]: [
        {
            suit: CardSuits.SPADE,
            value: CardValues.KING
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.KING
        }
    ]
};
const expectedPairsForCards4: CardsPairs = {
    [CardValues.NINE]: [
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.SPADE,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.CLUB,
            value: CardValues.NINE
        },
        {
            suit: CardSuits.HEART,
            value: CardValues.NINE
        }
    ],
    [CardValues.KING]: [
        {
            suit: CardSuits.SPADE,
            value: CardValues.KING
        },
        {
            suit: CardSuits.DIAMOND,
            value: CardValues.KING
        }
    ]
};
const expectedDealResults: CardsDealResult = {
    players:[
        {
            name:"Player 1",
            cards:[
                {
                    suit: CardSuits.DIAMOND,
                    value:CardValues.TEN
                },{
                    suit: CardSuits.HEART, value:CardValues.EIGHT},
                {suit:CardSuits.HEART,value:CardValues.TEN},
                {suit:CardSuits.CLUB,value:CardValues.QUEEN},
                {suit:CardSuits.SPADE,value:CardValues.JACK},
                {suit:CardSuits.HEART,value:CardValues.SIX},
                {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
            ],
            pairs:{
                [CardValues.EIGHT]:[
                    {suit:CardSuits.HEART,value:CardValues.EIGHT},
                    {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}],
                [CardValues.TEN]:[
                    {suit:CardSuits.DIAMOND,value:CardValues.TEN},
                    {suit:CardSuits.HEART,value:CardValues.TEN}
                ]
            },
            pairsCount:2
        },{
            name:"Player 2",
            cards:[
                {suit:CardSuits.CLUB,value:CardValues.SIX},
                {suit:CardSuits.SPADE,value:CardValues.NINE},
                {suit:CardSuits.SPADE,value:CardValues.EIGHT},
                {suit:CardSuits.CLUB,value:CardValues.NINE},
                {suit:CardSuits.DIAMOND,value:CardValues.SEVEN},
                {suit:CardSuits.HEART,value:CardValues.SEVEN},
                {suit:CardSuits.DIAMOND,value:CardValues.JACK}
            ],
            pairs:{
                [CardValues.SEVEN]:[
                    {suit:CardSuits.DIAMOND,value:CardValues.SEVEN},
                    {suit:CardSuits.HEART,value:CardValues.SEVEN}
                ],
                [CardValues.NINE]:[
                    {suit:CardSuits.SPADE,value:CardValues.NINE},
                    {suit:CardSuits.CLUB,value:CardValues.NINE}
                ]},
            pairsCount:2
        }
    ],
    winners: [{
        name:"Player 1",
        cards:[
            {suit:CardSuits.DIAMOND,value:CardValues.TEN},
            {suit:CardSuits.HEART,value:CardValues.EIGHT},
            {suit:CardSuits.HEART,value:CardValues.TEN},
            {suit:CardSuits.CLUB,value:CardValues.QUEEN},
            {suit:CardSuits.SPADE,value:CardValues.JACK},
            {suit:CardSuits.HEART,value:CardValues.SIX},
            {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
        ],
        pairs:{
            [CardValues.EIGHT]:[
                {suit:CardSuits.HEART,value:CardValues.EIGHT},
                {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
            ],
            [CardValues.TEN]: [
                {suit:CardSuits.DIAMOND,value:CardValues.TEN},
                {suit:CardSuits.HEART,value:CardValues.TEN}
            ]
        },
        pairsCount:2
    },{
        name:"Player 2",
        cards:[
            {suit:CardSuits.CLUB,value:CardValues.SIX},
            {suit:CardSuits.SPADE,value:CardValues.NINE},
            {suit:CardSuits.SPADE,value:CardValues.EIGHT},
            {suit:CardSuits.CLUB,value:CardValues.NINE},
            {suit:CardSuits.DIAMOND,value:CardValues.SEVEN},
            {suit:CardSuits.HEART,value:CardValues.SEVEN},
            {suit:CardSuits.DIAMOND,value:CardValues.JACK}
        ],
        pairs:{
            [CardValues.SEVEN]: [
                {suit:CardSuits.DIAMOND,value:CardValues.SEVEN},
                {suit:CardSuits.HEART,value:CardValues.SEVEN}
            ],
            [CardValues.NINE]: [
                {suit:CardSuits.SPADE,value:CardValues.NINE},
                {suit:CardSuits.CLUB,value:CardValues.NINE}
            ]
        },
        pairsCount:2
    }]
};

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
