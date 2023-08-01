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

export class Fighter {
    id: number
    firstname: string
    lastname?: string | null
    country?: string | null

    constructor(id: number, firstname: string, lastname?: string | null, country?: string | null) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
    }
}

class SeasonEngine {
    // #fighters: Array<Fighter>;
    //
    // constructor() {
    //     this.fighters = helpers.parseJsonFile()
    // }

    public rankPlayers(season: string): Array<string> {
        return [];
    }
}