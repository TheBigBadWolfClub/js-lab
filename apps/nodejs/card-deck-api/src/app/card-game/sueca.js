import Deck from "./deck.js";


const NUMBER_PLAYERS = 4
const excludeCards = ["8", "9", "10"]
const gameValue = [["A", 11],["K", 4],["Q", 2],["J", 3],["7", 10]]

const newTeam = (teamId) => {
    return {
        wins: 0,
        players: [
            {
                team: teamId,
                id: "p1",
                deck: []
            },
            {
                team: teamId,
                id: "p2",
                deck: []
            },
        ]
    }
}


const getPlayer = (teams, teamId, playerId) => {
    return getTeam(teams, teamId).players[playerId]
}

const getTeam = (teams, teamId) => {
    return teams[teamId]
}


const getNextPlayer = (Teams, previousPlayer) => {
    const players = Teams.flatMap(t => t.players)
        .sort((a, b) => a.id - b.id)
    if (previousPlayer == null) {
        return players[Math.floor(Math.random() * players.length)]
    }

    const nextIndex = players.indexOf(previousPlayer) + 1;
    if (nextIndex >= players.length)
        return players[0]
    return players[nextIndex]
}

const getCard = (player, hand) => {
    let card = null
    if (hand.suit != null) {
        card = player.deck.filter(c => c.isSuit(hand.suit))
            .sort((a, b) => a.rank - b.rank).pop();

        player.deck = player.deck.filter(item => item !== card)
    }

    if (card == null) {
        card = player.deck.sort((a, b) => a.rank - b.rank).shift();
    }

    return card
}


const handWinner = (hand) => {
    return hand.plays
        .filter(p => p.card.suit.equals(hand.suit))
        .sort((a, b) => a.card.rank - b.card.rank)[0].player;

}


const result = (hands) => {

    const calculus = hands
        .map(h => {
            return {
                team: h.winner.team,
                total: h.plays.reduce((prev, cur) => {
                    return prev + cur.card.value
                }, 0)
            }
        })
        .reduce((acc, element) => {
            acc[element.team] = acc[element.team] || {
                team: element.team,
                total: 0
            }
            acc[element.team].total = acc[element.team].total + element.total
            return acc
        }, [])


    return Object.values(calculus)
        .sort((a, b) =>  b.total -  a.total)

}

const dealNewGame = (teams) => {
    const deck = new Deck();
    deck.removeBySymbol(excludeCards)
    deck.updateValues(gameValue)
    deck.shuffle()

    const subDecks = deck.deal(NUMBER_PLAYERS)
    getPlayer(teams, 0, 0).deck = subDecks[0]
    getPlayer(teams, 1, 0).deck = subDecks[1]
    getPlayer(teams, 0, 1).deck = subDecks[2]
    getPlayer(teams, 1, 1).deck = subDecks[3]
    return teams

}

export default  async (numberOfGames) => {

    const Teams = [
        newTeam("one"),
        newTeam("two")
    ]


     Array.from(Array(numberOfGames).keys())
        .forEach(round => {
            console.log(`Game: ${round}`)

            // setup game
            const hands = []
            dealNewGame(Teams)


            // play game
            Array.from(Array(getPlayer(Teams, 0, 0).deck.length).keys())
                .forEach(() => {

                    // Setup hand
                    const hand = {suit: null, plays: [], winner: null}
                    let nextPlayer = getNextPlayer(Teams, hands[hands.length - 1])

                    // play
                    Array.from(Teams.flatMap(t => t.players))
                        .forEach(() => {
                            const card = getCard(nextPlayer, hand);
                            hand.suit = hand.suit != null ? hand.suit : card.suit
                            hand.plays.push({
                                player: nextPlayer,
                                card: card,
                            })
                            nextPlayer = getNextPlayer(Teams, nextPlayer);
                        })

                    // teardown hand
                    hand.winner = handWinner(hand)
                    hands.push(hand)
                })

            // end game
            const x = result(hands)
            console.log(x)
        })
}