import { Fighter } from "./Fighter";
import {parseJsonFile} from "./helpers/helpers";

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
    #fighters: Array<Fighter>;

    constructor() {
        this.#fighters = parseJsonFile();
    }

    public rankPlayers(season: string): Array<string> {
        return [];
    }
}