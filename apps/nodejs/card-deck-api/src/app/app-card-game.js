// use an async IIFE

import Deck from "./card-game/deck.js";
import sueca from "./card-game/sueca.js";

const testDeck = () => {
    let deck = new Deck();

    deck = deck.deck
        .map(c => c.toConsole())
        .reduce((acc, elem) => {
            const suite = elem[0]
            acc[suite] = acc[suite] || []
            acc[suite].push(elem)
            return acc
        }, [])

    console.log(deck)

}

const testShuffle = () => {
    let deck = new Deck();
    deck.shuffle()
    const deal = deck.deal(4);
    console.log(deal.map(subDeck => subDeck.map(c => c.toConsole())))

}

// use an async main function
async function main() {

    // await logIt(suits)
    // await logIt(cards)

    //testShuffle()
    await sueca(10)

}


(async () => {
    await main()
})();