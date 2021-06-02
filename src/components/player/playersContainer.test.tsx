import React from "react";
import { shallow } from "enzyme";
import { PlayersContainer, Player, Props } from "./playersContainer";
import styles from "./player.module.css";
import { expectedDealResults } from "../../mocks/mocks";

describe("PlayersContainer Component", () => {
    test("renders players in correct element", () => {
        const component = shallow(<PlayersContainer players={expectedDealResults.players} />);
        expect(component.prop("className")).toEqual(styles.playersContainer);
    });

    test("renders all players", () => {
        const component = shallow(<PlayersContainer players={expectedDealResults.players} />);
        const players = component.find(Player);
        expect(players).toHaveLength(expectedDealResults.players.length);
    });
});
