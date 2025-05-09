import { PockerGame } from "./pockerGame";

describe("Texas Holdem", () => {
  it("should read cards of one player", () => {
    const playerCards: string = "Kc 9s Ks Kd 9d 3c 6d";
    const game = new PockerGame();
    expect(game.readCards(playerCards)).toEqual([
      "Kc",
      "9s",
      "Ks",
      "Kd",
      "9d",
      "3c",
      "6d",
    ]);
  });

  it.each([
    {
      input: ["5c", "9s", "Ks", "Qd", "4d", "3c", "6d"],
      result: { hasOnePair: false, hasTwoPair: false, isFlush: false },
    },
    {
      input: ["Kc", "9s", "Ks", "Qd", "4d", "3c", "6d"],
      result: { hasOnePair: true, hasTwoPair: false, isFlush: false },
    },
    {
      input: ["Kc", "Qs", "Ks", "Qd", "4d", "3c", "6d"],
      result: { hasOnePair: false, hasTwoPair: true, isFlush: false },
    },
    {
      input: ["Kc", "Qs", "Ks", "Qd", "7d", "3c", "3d"],
      result: { hasOnePair: false, hasTwoPair: true, isFlush: false },
    },
    {
      input: ["Ks", "Qs", "7d", "2s", "3s", "3c", "6s"],
      result: { hasOnePair: false, hasTwoPair: false, isFlush: true },
    },
  ])("shouldEvaluateHand", ({ input, result }) => {
    const game = new PockerGame();
    expect(game.evaluateHand(input)).toEqual(result);
  });
});
