// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
    players: [
        { number: 1, name: "Asa Akira", position: "A" },
        { number: 2, name: "Ben Brawler", position: "B" },
        { number: 3, name: "Charles Compton", position: "C" },
        { number: 4, name: "Dave Dangerous", position: "D" },
        { number: 5, name: "Eli Emir", position: "E" },
        { number: 6, name: "Frank Footer", position: "F" }
    ],
    all: function () { return this.players },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI