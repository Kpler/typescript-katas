class PlayerResult {
    constructor(public name: string, public points: number, public roundsWon: number) { }
}
function computeMatchResults() {
    return [new PlayerResult("chun-li", 3, 1), new PlayerResult("sagat", 0, 2)];
}