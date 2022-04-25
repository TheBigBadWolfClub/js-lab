const {Card, Suite} = require("./card.js");


describe("Test card", () => {
    test("it should match a card equality", () => {
        const suite = {label: "hearts", symbol: "♥", color: "red"}
        const card = {label: "ace", symbol: "A", rank: "1"}
        const newCard = new Card(card, suite);

        expect(newCard.equal(new Card(card, suite))).toBeTruthy()
        expect(newCard.equal(new Card({label: "king", symbol: "K", rank: "2"}, suite))).toBeFalsy()
        expect(newCard.equal(new Card(card, {label: "spades", symbol: "♠", color: "black"}))).toBeFalsy()
    });

    test("it should match a lower card", () => {
        const suite = {label: "hearts", symbol: "♥", color: "red"}
        const card = {label: "ace", symbol: "A", rank: "1"}
        const newCard = new Card(card, suite);

        expect(newCard.isLower(new Card(card, suite))).toBeFalsy()
        expect(newCard.isLower(new Card({label: "king", symbol: "K", rank: "2"}
            , suite))).toBeTruthy()
        expect(newCard.isLower(new Card(
            {label: "king", symbol: "K", rank: "2"}, {
                label: "spades",
                symbol: "♠",
                color: "black"
            }))).toBeTruthy()
    });

    test("it should match a card isSuit", () => {
        const suite = {label: "hearts", symbol: "♥", color: "red"}
        const card = {label: "ace", symbol: "A", rank: "1"}
        const newCard = new Card(card, suite);

        expect(newCard.isSuit(new Suite({label: "hearts", symbol: "♥", color: "red"}))).toBeTruthy()
        expect(newCard.isSuit(new Suite({label: "spades", symbol: "♠", color: "black"}))).toBeFalsy()

    });
});