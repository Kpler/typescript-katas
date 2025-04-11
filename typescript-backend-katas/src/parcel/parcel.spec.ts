import {sortParcels} from "./parcel";

describe("Basic rule matching", () => {
    it("should match a parcel to its target Bin", () => {
        const parcel = {id: "1", weight: 10, destination: "Berlin", fragile: true};
        const rules = [{ match: { destination: "Berlin" }, bin: "berlin" }];
        expect(sortParcels([parcel], rules)).toEqual({berlin: [parcel]});
    });
    it("should match a different parcel to its target Bin", () => {
        const parcel = {id: "1", weight: 10, destination: "Paris", fragile: true};
        const rules = [{ match: { destination: "Paris" }, bin: "paris" }];
        expect(sortParcels([parcel], rules)).toEqual({paris: [parcel]});
    });
});