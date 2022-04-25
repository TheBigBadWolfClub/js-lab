// use an async IIFE

import Card from "./card.js";

const SUITES = new Set([
    {label: "hearts", symbol: "♥", color: "red"},
    {label: "spades", symbol: "♠", color: "black"},
    {label: "diamonds", symbol: "♦", color: "red"},
    {label: "clubs", symbol: "♣", color: "black"}
])

const CARDS = new Set([
    {label: "ace", symbol: "A", rank: 1},
    {label: "king", symbol: "K", rank: 2},
    {label: "queen", symbol: "Q", rank: 3},
    {label: "jack", symbol: "J", rank: 4},
    {label: "ten", symbol: "10", rank: 5},
    {label: "nine", symbol: "9", rank: 6},
    {label: "eight", symbol: "8", rank: 7},
    {label: "seven", symbol: "7", rank: 8},
    {label: "six", symbol: "6", rank: 9},
    {label: "five", symbol: "5", rank: 10},
    {label: "four", symbol: "4", rank: 11},
    {label: "three", symbol: "3", rank: 12},
    {label: "deuce", symbol: "2", rank: 13},
])


export default class Deck {
    #deckSet

    constructor() {
        this.#deckSet = this.#generate();
    }

    // Getter
    get deck() {
        return Array.from(this.#deckSet);
    }

    get deckSet() {
        return this.#deckSet;
    }

    get magicCards() {
        return this.deck
            .map(c => {
                c.s = c.suit.symbol
                return c
            });
    }

    removeBySymbol(excludeCards) {
        this.#deckSet = this.deck
            .filter(c => !excludeCards.includes(c.symbol))
    }

    // Method
    shuffle() {
        const sort = this.deck.sort(() => Math.random() - 0.5);
        this.#deckSet = new Set([...sort])
    }

    #generate() {
        const deck = [...SUITES].flatMap(s => {
            return [...CARDS].map(c => {
                return new Card(c, s)
            })
        })
        return new Set([...deck])
    }

    deal(numberOfPlayers) {
        const cardsPerPlayer = (this.deckSet.size / numberOfPlayers)

        return [...Array(numberOfPlayers).keys()]
            .map(i =>
                [...this.deckSet].slice(i * cardsPerPlayer, (i + 1) * cardsPerPlayer)
            )
    }


    updateValues(gameValue) {
        this.#deckSet =
            this.deck.map(c => {
                const update = gameValue.find(v => v[0] === c.symbol)
                if (update !== undefined) c.value = update[1]
                return c
            })
    }
}

