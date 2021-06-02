import React from "react";
import { shallow } from "enzyme";
import { Player, CardContainer, Props } from "./player";
import { mockOfPlayer } from "../../mocks/mocks";
import styles from "./player.module.css";

describe("Player Component", () => {
    let defaultProps: Props;
    beforeEach(() => {
        defaultProps = mockOfPlayer;
    });

    test("renders correct itself", () => {
        const component = shallow(<Player {...defaultProps} />);
        const cls = component.prop("className");
        expect(cls).toEqual(styles.playerItem);
        expect(component.find({ className: styles.name})).toHaveLength(1);
        expect(component.find(CardContainer)).toHaveLength(1);
    });

    test("renders correct player name", () => {
        const component = shallow(<Player {...defaultProps} />);
        const name = component.find({ className: styles.name});
        expect(name.text()).toContain(defaultProps.name);
    });

    test("passes correct properties to CardsContainer", () => {
        const component = shallow(<Player {...defaultProps} />);
        const cardsContainer = component.find(CardContainer);
        expect(cardsContainer).toHaveLength(1);
        expect(cardsContainer.props()).toEqual({
            cards: defaultProps.cards
        });
    });
});
