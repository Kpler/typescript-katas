import { rank } from "./streetfighter";


describe("Streetfighter", () => {
    it("should run", () => {
        expect(rank("2021-2022")).toStrictEqual(1);
    });
});



