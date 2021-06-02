import { CardEntity, CardsDealResult, CardsPairs, CardSuits, CardValues, ExpectedDataSet } from "../types";

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
    [CardValues.SEVEN]: {
        cards: [
            {
                suit: CardSuits.CLUB,
                value: CardValues.SEVEN
            },
            {
                suit: CardSuits.DIAMOND,
                value: CardValues.SEVEN
            }
        ],
        color: expect.any(String)
    }
};
const expectedPairsForCards3: CardsPairs = {
    [CardValues.NINE]: {
        cards: [
            {
                suit: CardSuits.DIAMOND,
                value: CardValues.NINE
            },
            {
                suit: CardSuits.SPADE,
                value: CardValues.NINE
            }
        ],
        color: expect.any(String)
    },
    [CardValues.KING]: {
        cards: [
            {
                suit: CardSuits.SPADE,
                value: CardValues.KING
            },
            {
                suit: CardSuits.DIAMOND,
                value: CardValues.KING
            }
        ],
        color: expect.any(String)
    }
};
const expectedPairsForCards4: CardsPairs = {
    [CardValues.NINE]: {
        cards: [
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
        color: expect.any(String)
    },
    [CardValues.KING]: {
        cards: [
            {
                suit: CardSuits.SPADE,
                value: CardValues.KING
            },
            {
                suit: CardSuits.DIAMOND,
                value: CardValues.KING
            }
        ],
        color: expect.any(String)
    }
};
const expectedDealResults: CardsDealResult = {
    players:[
        {
            name:"Player 1",
            cards:[
                {suit: CardSuits.DIAMOND,value:CardValues.TEN},
                {suit: CardSuits.HEART, value:CardValues.EIGHT},
                {suit:CardSuits.HEART,value:CardValues.TEN},
                {suit:CardSuits.CLUB,value:CardValues.QUEEN},
                {suit:CardSuits.SPADE,value:CardValues.JACK},
                {suit:CardSuits.HEART,value:CardValues.SIX},
                {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
            ],
            pairs:{
                [CardValues.EIGHT]: {
                    cards: [
                        {suit:CardSuits.HEART,value:CardValues.EIGHT},
                        {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
                    ],
                    color: expect.any(String)
                },
                [CardValues.TEN]: {
                    cards: [
                        {suit:CardSuits.DIAMOND,value:CardValues.TEN},
                        {suit:CardSuits.HEART,value:CardValues.TEN}
                    ],
                    color: expect.any(String)
                }
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
                [CardValues.SEVEN]: {
                    cards: [
                        {suit:CardSuits.DIAMOND,value:CardValues.SEVEN},
                        {suit:CardSuits.HEART,value:CardValues.SEVEN}
                    ],
                    color: expect.any(String)
                },
                [CardValues.NINE]: {
                    cards: [
                        {suit:CardSuits.SPADE,value:CardValues.NINE},
                        {suit:CardSuits.CLUB,value:CardValues.NINE}
                    ],
                    color: expect.any(String)
                }
            },
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
            [CardValues.EIGHT]: {
                cards: [
                    {suit:CardSuits.HEART,value:CardValues.EIGHT},
                    {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
                ],
                color: expect.any(String)
            },
            [CardValues.TEN]: {
                cards: [
                    {suit:CardSuits.DIAMOND,value:CardValues.TEN},
                    {suit:CardSuits.HEART,value:CardValues.TEN}
                ],
                color: expect.any(String)
            }
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
            [CardValues.SEVEN]: {
                cards: [
                    {suit:CardSuits.DIAMOND,value:CardValues.SEVEN},
                    {suit:CardSuits.HEART,value:CardValues.SEVEN}
                ],
                color: expect.any(String)
            },
            [CardValues.NINE]: {
                cards: [
                    {suit:CardSuits.SPADE,value:CardValues.NINE},
                    {suit:CardSuits.CLUB,value:CardValues.NINE}
                ],
                color: expect.any(String)
            }
        },
        pairsCount:2
    }]
};

const mockOfPlayer = {
    name:"Player 1",
    cards:[
        {suit: CardSuits.DIAMOND,value:CardValues.TEN},
        {suit: CardSuits.HEART, value:CardValues.EIGHT},
        {suit:CardSuits.HEART,value:CardValues.TEN},
        {suit:CardSuits.CLUB,value:CardValues.QUEEN},
        {suit:CardSuits.SPADE,value:CardValues.JACK},
        {suit:CardSuits.HEART,value:CardValues.SIX},
        {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
    ],
    pairs:{
        [CardValues.EIGHT]: {
            cards: [
                {suit:CardSuits.HEART,value:CardValues.EIGHT},
                {suit:CardSuits.DIAMOND,value:CardValues.EIGHT}
            ],
            color: expect.any(String)
        },
        [CardValues.TEN]: {
            cards: [
                {suit:CardSuits.DIAMOND,value:CardValues.TEN},
                {suit:CardSuits.HEART,value:CardValues.TEN}
            ],
            color: expect.any(String)
        }
    },
    pairsCount:2
};

export {
    expectedDecks,
    randomCards1,
    randomCards2,
    randomCards3,
    expectedPairsForCards1,
    expectedPairsForCards2,
    expectedPairsForCards3,
    expectedPairsForCards4,
    expectedDealResults,
    mockOfPlayer
};
