import {PockerGame} from "./pockerGame";

describe("Texas Holdem", () => {
  it("should read cards of one player", () => {
    const playerCards: string = 'Kc 9s Ks Kd 9d 3c 6d'
    const game = new PockerGame();
    expect(game.readCards(playerCards)).toBe({"numberOfPairs": 0, "isFlush": 0});
  });
});
