interface Parcel {
    id: string;
    weight: number;       // in kilograms
    destination: string;  // e.g. "Berlin"
    fragile: boolean;
}

interface Rule {
    match: Partial<Parcel> & {
        minWeight?: number;
        maxWeight?: number;
    };
    bin: string;
    priority?: number; // Optional. Lower = higher priority.
}

export function sortParcels(
    parcels: Parcel[],
    rules: Rule[],
    // defaultBin?: string
): { [bin: string]: Parcel[] } {
    const result: {[bin: string]: Parcel[]} = Object.fromEntries(rules.map((rule) => [rule.bin, []])) 

    for (const parcel of parcels) {
        const rule = findMatchingRule(rules, parcel)
        if (rule) {
            result[rule.bin].push(parcel);
        }
    }
    return result

}

function isNumber(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value);
}

function findMatchingRule(rules: Rule[], parcel: Parcel) {
    return rules.find((rule) => {
        const destinationCheck = rule.match.destination === parcel.destination
        const maxWeightCheck = isNumber(rule.match.maxWeight) ? rule.match.maxWeight >= parcel.weight : true

        return destinationCheck && maxWeightCheck
    });
}

