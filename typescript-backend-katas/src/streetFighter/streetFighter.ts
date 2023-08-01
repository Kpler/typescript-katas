class Match {
    #winner: string;
    #home: string;
    #away: string;
    #timeslot: number;

    constructor(winner: string, home: string, away: string, timeslot: number) {
        this.#winner = winner;
        this.#home = home;
        this.#away = away;
        this.#timeslot = timeslot;
    }
}

class SeasonEngine {
    public rankPlayers(season: string): Array<string> {
        return [];
    }
}