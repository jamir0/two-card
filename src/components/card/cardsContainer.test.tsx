import React from "react";
import { shallow } from "enzyme";
import { CardsContainer, Card } from "./cardsContainer";
import { randomCards1 } from "../../mocks/mocks";
import styles from "./card.module.css";

describe("CardsContainer Component", () => {
    test("renders cards in correct element", () => {
        const component = shallow(<CardsContainer cards={randomCards1} />);
        expect(component.prop("className")).toEqual(styles.cardsContainer);
    });

    test("renders all cards", () => {
        const component = shallow(<CardsContainer cards={randomCards1} />);
        const cards = component.find(Card);
        expect(cards).toHaveLength(randomCards1.length);
    });
});
