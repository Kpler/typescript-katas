import { Gift } from "./workshop";

describe('Level 1: Gift Registry', () => {
    test('a gift should have id, weight, recipient and name', () => {
        const gift = new Gift(
            8,
            "Jan",
            "New Laptop"
        )
        expect(gift.getId()).not.toBe(null)
        expect(gift.getWeight()).toBe(8);
        expect(gift.getRecipient()).toEqual("Jan");
        expect(gift.getName()).toEqual("New Laptop");
    })

    test('weight should be a positive value', () => {
       expect(new Gift(-1, "Jan", "New Laptop")).toThrow();
    })
});