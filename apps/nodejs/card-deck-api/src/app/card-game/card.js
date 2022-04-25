export class Suite {
    constructor({label, symbol, color}) {
        this.label = label
        this.symbol = symbol
        this.color = color
    }


    equals(suit) {
        return this.label === suit.label;
    }
}

export default class Card {
    constructor({label, symbol, rank}, suite) {
        this.s = null
        this.symbol = symbol
        this.label = label
        this.rank = rank
        this.value = 0
        this.suit =  new Suite(suite);
    }

    toConsole() {
        return `${this.suit.symbol} ${this.symbol} `
    }

    isLower(card) {
        return this.rank < card.rank
    }

    isBigger(card) {
        return this.rank > card.rank
    }

    sameDeck(card) {
        return this.suit === card.suit
    }

    isSuit(suit) {
        return this.suit.equals(suit)
    }



    equal(card) {
        return this.symbol === card.symbol
        && this.suit === card.suit
    }
}

