import {FighterMatches} from "./fighter.matches";
import {FighterStats} from "./fighter.stats";

export function calculateRankings(listOfFighters: string[], listOfMatches: Array<FighterMatches>): Array<FighterStats> {

    return [{
        name: "e honda",
        ranking: 1,
        points: 3
    },
        {
            name: "blanka",
            ranking: 2,
            points: 1
        },
        {
            name: "major guile",
            ranking: 3,
            points: 1
        },
        {
            name: "ryuu",
            ranking: 4,
            points: 0
        }
    ]
}