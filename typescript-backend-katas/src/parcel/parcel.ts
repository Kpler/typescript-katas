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
    const result: {[bin: string]: Parcel[]} = {};
    for (const parcel of parcels) {
        const rule = rules.find((rule) => rule.bin === parcel.destination.toLowerCase())
        if (rule) {
            const bin = rule ? rule.bin : undefined;
            if (bin) {
                if (!result[bin]) {
                    result[bin] = [];
                }
                result[bin].push(parcel);
            }
        }
    }
    return result

}
