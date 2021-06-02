import React, { useCallback, useState } from "react";
import { CardsDealResult, DeckOfCards, SettingsState } from "../../types";
import "./App.css";
import { dealCards, generateDeckOfCards } from "../../utils/game";
import Desk from "../desk/desk";
import { Settings } from "../settings/settings";

const initialSettingsState: SettingsState = {
    playersCount: 3,
    cardsCount: DeckOfCards.SHORT,
    cardsPerPlayer: 7
};

const initialGameResultsState: CardsDealResult = {
    players: []
};
const App = () => {
    const [settings, setSettings] = useState<SettingsState>(initialSettingsState);
    const [gameResults, setGameResults] = useState<CardsDealResult>(initialGameResultsState);
    const {cardsCount, playersCount, cardsPerPlayer } = settings;
    const onDeal = useCallback(
        () => {
            const deckOfCards = generateDeckOfCards(cardsCount);
            setGameResults(dealCards(
                playersCount,
                cardsPerPlayer,
                deckOfCards
            ));
        },
        [cardsCount, cardsPerPlayer, playersCount]
    );
    const onSettingsChange = useCallback(
        (newSettings: Partial<SettingsState>) => setSettings({
            ...settings,
            ...newSettings
        }),
        [settings]
    );
    return (
        <div className="App">

            <h1>Instructions:</h1>
            <p>
                Create a mini game where clicking the button generates several hand cards.<br />
                Please be sure to fork this repo and update the readme file with your notes.
            </p>
            <ul>
                <li>A hand has 7 cards</li>
                <li>The winner of the game will be by the amount of pairs a hand has</li>
                <li>Each "deal" will create a brand new "game" with new hands</li>
                <li>Display those hands</li>
                <li>Mark each hand "pairs" with proper border. Be sure diff pair has diff border</li>
                <li>Game has two hands by default</li>
                <li>Organized code</li>
            </ul>

            <h2>Helpers</h2>
            <div>
                <h4>Example Card:</h4>
                <img src="http://h3h.net/images/cards/diamond_3.svg" alt="example card" className="card" />
            </div>
            <div>
                <Settings settings={settings} onChange={onSettingsChange} />
            </div>
            <div>
                <h4>Deal Button:</h4>
                <button className="play-button" onClick={onDeal}>
                    Deal Cards
                </button>
                <Desk {...gameResults} settings={settings} />
            </div>

        </div>
    );
};

export default App;
