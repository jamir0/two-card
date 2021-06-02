import React from "react";
import { shallow } from "enzyme";
import { Card, Props } from "./card";
import { CardEntity, CardSuits, CardValues } from "../../types";
import styles from "./card.module.css";
import { CARD_SUITES_STYLES_MAP } from "../../constants";

describe("Card Component", () => {
    let defaultProps: Props;
    const cases = [
        [CardSuits.SPADE, {suit: CardSuits.SPADE, value: CardValues.QUEEN}, "spadeSuit"],
        [CardSuits.DIAMOND, {suit: CardSuits.DIAMOND, value: CardValues.QUEEN}, "diamondSuit"],
        [CardSuits.HEART, {suit: CardSuits.HEART, value: CardValues.QUEEN}, "heartSuit"],
        [CardSuits.CLUB, {suit: CardSuits.CLUB, value: CardValues.QUEEN}, "clubSuit"],
    ];

    beforeEach(() => {
        defaultProps = {
            suit: CardSuits.SPADE,
            value: CardValues.QUEEN
        };
    });

    test("renders default card", () => {
        const component = shallow(<Card {...defaultProps} />);
        const cls = component.prop("className");
        expect(cls).toContain(styles.cardItem);
        expect(cls).toContain(styles[CARD_SUITES_STYLES_MAP[CardSuits.SPADE].colorStyle]);
    });

    test.each(cases)(
        "renders correct suit color for %s",
        (suitName: CardSuits, card: CardEntity, className: string) => {
            const component = shallow(<Card {...card} />);
            const suit = component.find({className: styles[className]});
            expect(suit).toHaveLength(1);
        }
    );

    test("highlights pair", () => {
        const card: Props = {
            suit: CardSuits.SPADE,
            value: CardValues.QUEEN,
            color: "f00"
        };
        const component = shallow(<Card {...card} />);
        const style = component.prop("style");
        expect(style).toEqual({
            borderColor: "#f00"
        });
    });
});
