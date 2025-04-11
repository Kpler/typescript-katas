import {sortParcels} from "./parcel";

describe("Basic rule matching", () => {
    it.each([
    {
        parcels: [{id: "1", weight: 10, destination: "Berlin", fragile: true}],
        rules: [{ match: { destination: "Berlin" }, bin: "berlin" }],
        expected: {berlin: [{id: "1", weight: 10, destination: "Berlin", fragile: true}]}
    },
    {
        parcels: [{id: "1", weight: 15, destination: "Paris", fragile: true}],
        rules: [{ match: { destination: "Paris" }, bin: "paris" }],
        expected: {paris: [{id: "1", weight: 15, destination: "Paris", fragile: true}]}
    },
    {
        parcels: [{id: "1", weight: 20, destination: "Cary", fragile: false}],
        rules: [{ match: { destination: "Cary" }, bin: "cary" }],
        expected: {cary: [{id: "1", weight: 20, destination: "Cary", fragile: false}]}
    },
    {
        parcels: [{id: "1", weight: 20, destination: "Cary", fragile: false}],
        rules: [{ match: { destination: "Berlin" }, bin: "berlin" }],
        expected: {berlin: []}
    },
    {
        parcels: [{id: "1", weight: 20, destination: "Cary", fragile: false}],
        rules: [{ match: { destination: "Cary" }, bin: "cary-bin" }],
        expected: {'cary-bin': [{id: "1", weight: 20, destination: "Cary", fragile: false}]}
    },
    {
        parcels: [
            {id: "1", weight: 20, destination: "Cary", fragile: false},
            {id: "2", weight: 10, destination: "Berlin", fragile: true}
        ],
        rules: [
            { match: { destination: "Berlin" }, bin: "berlin" },
            { match: { destination: "Cary" }, bin: "cary" }
        ],
        expected: {
            cary: [{id: "1", weight: 20, destination: "Cary", fragile: false}],
            berlin: [{id: "2", weight: 10, destination: "Berlin", fragile: true}]
        }
    },
    {
        parcels: [
            {id: "1", weight: 20, destination: "Cary", fragile: false},
            {id: "2", weight: 10, destination: "Berlin", fragile: true},
            {id: "3", weight: 5, destination: "Berlin", fragile: false}
        ],
        rules: [
            { match: { destination: "Berlin" }, bin: "berlin" },
            { match: { destination: "Cary" }, bin: "cary" }
        ],
        expected: {
            cary: [{id: "1", weight: 20, destination: "Cary", fragile: false}],
            berlin: [
                {id: "2", weight: 10, destination: "Berlin", fragile: true},
                {id: "3", weight: 5, destination: "Berlin", fragile: false}
            ]
        }
    }
    ])("should match a parcel to there target bins", ({parcels, rules, expected}) => {
        expect(sortParcels(parcels, rules)).toEqual(expected);
    });

    it.each([
        {
            parcels: [{id: "1", weight: 10, destination: "Berlin", fragile: true}],
            rules: [{ match: { destination: "Berlin", maxWeight: 10 }, bin: "berlin" }],
            expected: {berlin: [{id: "1", weight: 10, destination: "Berlin", fragile: true}]}
        },
        {
            parcels: [{id: "1", weight: 15, destination: "Berlin", fragile: true}],
            rules: [{ match: { destination: "Berlin", maxWeight: 10 }, bin: "berlin-lightweight" }],
            expected: {'berlin-lightweight': []}
        }
    
    ])("should match percels according to their weight", ({parcels, rules, expected}) => {
        expect(sortParcels(parcels, rules)).toEqual(expected);

    })
});
