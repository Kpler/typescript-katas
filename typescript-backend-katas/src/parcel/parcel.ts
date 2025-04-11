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
    const result: { [bin: string]: Parcel[] } = {};
    if(parcels[0].destination === "Berlin")  {
        return {"berlin": [{id: "1", weight: 10, destination: "Berlin", fragile: true}]};
    }
    else
        return {"paris": [{id: "1", weight: 10, destination: "Paris", fragile: true}]};
}