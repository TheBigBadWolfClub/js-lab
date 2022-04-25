import Deck from "../card-game/deck.js";





export const newDeck = async (req, res) => {
    const deck = new Deck();
    res.json([...deck.magicCards])
}

export const deckBySuit = async (req, res) => {
    const deck = new Deck();
    res.json(
        Array.from(deck.magicCards)
            .filter(c => c.suit.label === req.params.suit)
    )
}

export const suits = async (req, res) => {
    const reduce = new Deck().deck
        .map(card => card.suit)
        .reduce((acc, elem) => {
            if (!acc.find(s => s.label === elem.label)) {
                acc.push(elem)
            }
            return acc
        }, [])
    res.json(reduce);
}

export const cards = async (req, res) => {
    const reduce = Array.from(new Deck().deck)
        .map(card => {
            delete card.suit
            return card
        })
        .reduce((acc, elem) => {
            if (!acc.find(s => s.label === elem.label)) {
                acc.push(elem)
            }
            return acc
        }, [])
    res.json(reduce);
}


