import { rank } from "./streetfighter";


describe("Streetfighter", () => {
    it("should run", async () => {
        console.log(rank("2021-2022"))
        const result = await rank("2021-2022")
        expect(result).toStrictEqual(1);
    });
});



