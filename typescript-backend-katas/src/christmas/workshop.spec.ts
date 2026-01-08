import { Gift, Workshop } from "./workshop";

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
        expect(() => new Gift(-1, "Jan", "New Laptop")).toThrow();
    });

    test('weight should be a positive value', () => {
        expect(() => new Gift(-1, "Jan", "New Laptop")).toThrow('Weight cannot be negative!');
    });

    test('gift should have different auto-generated ids', () => {
        const gift1 = new Gift(1, "Jan", "New Laptop")
        const gift2 = new Gift(1, "Jan", "New Screen")

        expect(gift1.getId()).not.toEqual(gift2.getId());
    });

    test('all parameters are required to create a gift', () => {
        expect(() => new Gift(1, "", "New Laptop")).toThrow();
        expect(() => new Gift(1, "Jan", "")).toThrow();
    });
});

describe('Level 2: Workshop', () => {
  let workshop: Workshop;

  beforeEach(() => {
    workshop = new Workshop();
  });

  test('workshop should start with empty inventory', () => {
      expect(workshop.getGiftCount()).toBe(0);
  });

  test('add a gift to inventory', () => {
      const gift = new Gift(
          8,
          "Jan",
          "New Laptop"
      )
      workshop.addGift(gift);
      expect(workshop.getGiftCount()).toBe(1);
  });

  test('find a gift based on the recipient', () => {
      const gift = new Gift(
          8,
          "Jan",
          "New Laptop"
      )
      workshop.addGift(gift);
      expect(workshop.getGiftByRecipient("Jan")).toBe(gift);
  })

   test('find a gift based on the recipient when there are multiple recipients', () => {
      const giftOne = new Gift(
          8,
          "Jan",
          "New Laptop"
      )
      const giftTwo = new Gift(
          8,
          "Pedro",
          "New Laptop"
      )

      workshop.addGift(giftOne);
      workshop.addGift(giftTwo);

      expect(workshop.getGiftByRecipient("Pedro")).toBe(giftTwo);
  })
});