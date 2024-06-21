
export interface FighterRanking  {
    name : String,
    rank: Number,
    points: Number
}

export interface Match {
    home: string;
    away: string;
    winner: string | null;
}

export interface FighterPoints {
    [key: string]: number;
}

export const calculateRanking = (matches: Match[]): FighterRanking[] => {
    const fighterPoints : FighterPoints = {};

    matches.forEach(
        match => {

            if (!fighterPoints[match.home]) {
                fighterPoints[match.home] = 0;
            }

            if (!fighterPoints[match.away]) {
                fighterPoints[match.away] = 0;
            }

            if (match.winner === match.home) {
                fighterPoints[match.home] += 3;
            } else if (match.winner === match.away) {
                fighterPoints[match.away] += 3;
            } else {
                fighterPoints[match.home] += 1;
                fighterPoints[match.away] += 1;
            }
        }
    )

    const rankings = Object.keys(fighterPoints).map(name => ({
        name,
        points: fighterPoints[name],
    }));
    rankings.sort((a, b) => b.points - a.points)

    return rankings.map((ranking, index) => {
            return ({name: ranking.name, rank: index, points: ranking.points})
        }
    );
}

export const getMatches = (fighters: String[]): Match[] => {
    const matches: Match[] = [];
    for (let i = 0; i < fighters.length; i++) {
        const fightersList = fighters[i].split(',');
        if (fightersList[2] > fightersList[3]) {
            const winner = fightersList[1];
        }
            matches.push({
                home: fightersList[1],
                away: fightersList[4],
                winner: ,
            });

    }
    return matches;
}