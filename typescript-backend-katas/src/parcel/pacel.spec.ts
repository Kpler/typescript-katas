import {sortParcels} from "./parcel";

describe("Basic rule matching", () => {
    it("should match a parcel to its target Bin", () => {
        const parcel = {id: "1", weight: 10, destination: "Berlin", fragile: true};
        const parcelWithMatchRule = { match: { destination: "Berlin" }, bin: "berlin" };
        expect(sortParcels([parcel], [parcelWithMatchRule])).toEqual({berlin: [parcel]});
    });
});