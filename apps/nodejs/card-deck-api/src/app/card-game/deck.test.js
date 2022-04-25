import Deck from "./deck.js";


test('deck is build', async () => {
    const deck = new Deck();
    expect(deck.deckSet.size).toBe(52)
    expect(deck.deck.length).toBe(52)
})
