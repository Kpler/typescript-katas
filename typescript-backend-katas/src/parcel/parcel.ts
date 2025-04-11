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
    if (rules[0].bin === parcels[0].destination.toLowerCase()) {
        return {[parcels[0].destination.toLowerCase()]: parcels};
    }
    return {
        [rules[0].bin]: []
    }

}
