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
      result: "",
    },
    {
      input: ["Kc", "9s", "Ks", "Qd", "4d", "3c", "6d"],
      result: "One Pair",
    },
    {
      input: ["Kc", "Qs", "Ks", "Qd", "4d", "3c", "6d"],
      result: "Two Pairs",
    },
    {
      input: ["Kc", "Qs", "Ks", "Qd", "7d", "3c", "3d"],
      result: "Two Pairs",
    },
    {
      input: ["Ks", "Qs", "7d", "2s", "3s", "3c", "6s"],
      result: "Flush",
    },
  ])("shouldEvaluateHand", ({ input, result }) => {
    const game = new PockerGame();
    expect(game.evaluateHand(input)).toEqual(result);
  });
});
